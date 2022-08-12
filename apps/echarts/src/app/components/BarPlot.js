import React, { useState, useMemo } from 'react';

import { generateBarData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput } from './common/Inputs';

const BarPlot = () => {
  const [numberOfBars, setNumberOfBars] = useState(5);

  const generatedData = useMemo(
    () => generateBarData(numberOfBars),
    [numberOfBars]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      boundaryGap: true,
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'bar',
        large: true,
        data,
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: '{b}: {c}', // tooltip formatter
    },
    animationDuration: 500,
  };

  return (
    <>
      <Title>Bar Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Bars"
          value={numberOfBars}
          setValue={setNumberOfBars}
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

  return data.map((entry, i) => {
    if (i % 2 === 0) {
      return {
        value: [entry.x, entry.y],
        itemStyle: {
          opacity: 0.5,
        },
      };
    }
    return [entry.x, entry.y];
  });
}

export default BarPlot;
