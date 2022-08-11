import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const AreaPlot = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(false);
  const [downsample, setDownsample] = useState(false);
  const [includeNegatives, setIncludeNegatives] = useState(false);
  const [showMultiple, setShowMultiple] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);

  const generatedData = useMemo(
    () => generateTimeseriesData(numberOfPoints, 60, includeNegatives),
    [numberOfPoints, includeNegatives]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const generateNewData = () => {
    const newData = generateTimeseriesData(
      Math.floor(numberOfPoints / 2),
      120,
      includeNegatives
    );
    return formatData(newData);
  };

  const annotations = {
    markPoint: {
      symbol: 'pin',
      symbolSize: [60, 50],
      data: [{ name: 'Average', type: 'average' }],
    },
    markLine: {
      symbolSize: 0,
      label: { position: 'insideEndBottom', formatter: '{b}: {c}' },
      data: [
        { name: 'Max Point', type: 'max' },
        {
          name: 'Test Data',
          xAxis: '2020-01-01 07:33:00',
          label: {
            position: 'insideEndBottom',
            rotate: '0',
            offset: [65, 0],
            formatter: '{b}',
          },
        },
        {
          name: 'Train Data',
          xAxis: '2020-01-01 07:33:00',
          label: {
            position: 'insideEndTop',
            formatter: '{b}',
            rotate: '0',
            offset: [-5, 21],
          },
        },
      ],
    },
  };

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'time',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 0,
        },
        saveAsImage: {
          name: 'area-plot',
          backgroundColor: 'white',
        },
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: showPoints,
        sampling: downsample ? 'lttb' : null,
        areaStyle: {},
        data,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  if (showAnnotations) {
    options.series[0] = { ...options.series[0], ...annotations };
  }

  if (showMultiple) {
    options.series.push({
      type: 'line',
      showSymbol: showPoints,
      sampling: downsample ? 'lttb' : null,
      areaStyle: {
        color: 'green', // setting different area fill
        opacity: 0.3,
      },
      data: generateNewData(),
    });
  }

  return (
    <>
      <Title>Area Plot</Title>
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
          label="Include Negatives"
          isOn={includeNegatives}
          setIsOn={setIncludeNegatives}
        />
        <Toggle
          label="Show Annotations"
          isOn={showAnnotations}
          setIsOn={setShowAnnotations}
        />
        <Toggle
          label="Multiple Series"
          isOn={showMultiple}
          setIsOn={setShowMultiple}
        />
      </ControlBar>
      <Wrapper>
        <EChart options={options} />
      </Wrapper>
    </>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default AreaPlot;
