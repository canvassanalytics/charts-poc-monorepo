import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const LinePlot = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);
  const [showMultiple, setShowMultiple] = useState(false);

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

  if (showMultiple) {
    options.series.push({
      type: 'line',
      showSymbol: showPoints,
      sampling: downsample ? 'lttb' : null,
      data: generateNewData(),
    });
  }

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

export default LinePlot;
