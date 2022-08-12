import React, { useMemo, useState } from 'react';

import { generateScatterplotsData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const SactterPlot = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showMultiple, setShowMultiple] = useState(false);

  const generatedData = useMemo(
    () => generateScatterplotsData(numberOfPoints),
    [numberOfPoints]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const generateNewData = () => {
    const newData = generateScatterplotsData(numberOfPoints);
    const formattedData = formatData(newData);
    formattedData.push({
      //styling just one point
      value: [40, 0],
      symbolSize: 11,
      itemStyle: {
        color: 'red',
      },
    });
    return formattedData;
  };

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'value',
      boundaryGap: false,
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
        type: 'scatter',
        name: 'Series A',
        large: true,
        // z: 5, add z to control plot order. This however overrides emphasis
        data,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    animationDuration: 500,
  };

  if (showMultiple) {
    options.series.push({
      type: 'scatter',
      name: 'Series B',
      large: true,
      data: generateNewData(),
    });
  }

  return (
    <>
      <Title>Scatter Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
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

export default SactterPlot;
