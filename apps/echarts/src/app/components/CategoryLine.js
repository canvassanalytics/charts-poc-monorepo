import React, { useMemo, useState } from 'react';

import { generateCategoricalTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const CategoryLine = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(1000);
  const [showPoints, setShowPoints] = useState(true);

  const generatedData = useMemo(
    () => generateCategoricalTimeseriesData(numberOfPoints),
    [numberOfPoints]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

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
    grid: { top: 8, right: 8, bottom: 90, left: 45 },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisLabel: {
        formatter: monthFormatter,
        hideOverlap: true,
      },
    },
    yAxis: {
      type: 'category',
    },
    dataZoom: [{ type: 'inside' }, { type: 'slider' }],
    series: [
      {
        type: 'line',
        showSymbol: showPoints,
        sampling: 'lttb',
        emphasis: {
          itemStyle: {
            color: 'blue',
            borderColor: 'blue',
          },
          lineStyle: {
            opacity: 0.5,
          },
        },
        blur: {
          showSymbol: false,
          opacity: 0.5,
        },
        data,
      },
    ],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        show: true,
        type: 'cross',
      },
    },
  };

  return (
    <>
      <Title>Categorical Line Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
        />
        <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints} />
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

export default CategoryLine;
