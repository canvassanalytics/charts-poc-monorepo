import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const LinePlot = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);
  const [showMultiple, setShowMultiple] = useState(false);
  const [showSynced, setShowSynced] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const generatedData = useMemo(
    () => generateTimeseriesData(numberOfPoints),
    [numberOfPoints]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const generateNewData = () => {
    const newData = generateTimeseriesData(Math.floor(numberOfPoints / 2), 120);
    return formatData(newData);
  };

  let pastday;
  function monthFormatter(value, index) {
    const date = new Date(value);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    if (!pastday) pastday = day;
    if (index === 1 || day !== pastday) {
      pastday = day;
      return `${month} ${day}, ${date.getFullYear()}`;
    }
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const options = {
    grid: { top: 8, right: 8, bottom: 90, left: 36 },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisLabel: {
        formatter: monthFormatter,
        hideOverlap: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [{ type: 'inside' }, { type: 'slider' }],
    series: [
      {
        type: 'line',
        showSymbol: showPoints,
        sampling: downsample ? 'lttb' : null,
        data,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  if (showOverlay) {
    options.series[0].markArea = {
      label: { show: false },
      itemStyle: { borderColor: 'pink', borderWidth: 2 },
      emphasis: {
        label: { show: true, position: 'insideMiddle' },
      }, // show name on hover
      data: [
        [
          {
            name: 'lower bound',
            xAxis: '2020-01-01 07:10:00',
            itemStyle: { color: 'pink' },
          },
          { xAxis: '2020-01-01 07:15:00' },
        ],
        [
          {
            name: 'lower bound',
            xAxis: '2020-01-01 07:30:00',
            itemStyle: { color: 'pink' },
          },
          { xAxis: '2020-01-01 07:30:01' },
        ],
      ],
    };
  }

  if (showMultiple) {
    options.series.push({
      type: 'line',
      showSymbol: showPoints,
      sampling: downsample ? 'lttb' : null,
      step: 'end', // interpolation method
      data: generateNewData(),
    });
  }

  const optionsSyncedCharts = {
    grid: [
      { right: 8, left: 36, height: '30%' },
      { right: 8, left: 36, height: '30%', top: '55%', bottom: 90 },
    ],
    xAxis: [
      {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          show: false,
        },
        min: '2020-01-01 07:01:00', // note: important to set min/max when linking plots
        max: '2020-01-01 08:40:00', // so axis ticks line up
      },
      {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          formatter: monthFormatter,
        },
        axisTick: {
          alignWithLabel: true,
        },
        min: '2020-01-01 07:01:00',
        max: '2020-01-01 08:40:00',
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
      {
        type: 'value',
        gridIndex: 1,
      },
    ],
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
    },
    dataZoom: [{ type: 'inside', xAxisIndex: [0, 1] }],
    series: [
      {
        type: 'line',
        showSymbol: showPoints,
        sampling: downsample ? 'lttb' : null,
        data,
      },
      {
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        showSymbol: showPoints,
        sampling: downsample ? 'lttb' : null,
        data: generateNewData(),
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
      <Title>Line Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
        />
        <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints} />
        <Toggle
          label="Downsample Data"
          isOn={downsample}
          setIsOn={setDownsample}
        />
        <Toggle
          label="Show Overlay"
          isOn={showOverlay}
          setIsOn={setShowOverlay}
        />
        <Toggle
          label="Multiple Series"
          isOn={showMultiple}
          setIsOn={setShowMultiple}
        />
        <Toggle
          label="Syncronized Plots"
          isOn={showSynced}
          setIsOn={setShowSynced}
        />
      </ControlBar>
      {showSynced ? (
        <Wrapper>
          <EChart options={optionsSyncedCharts} />
        </Wrapper>
      ) : (
        <Wrapper>
          <EChart options={options} />
        </Wrapper>
      )}
    </>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default LinePlot;
