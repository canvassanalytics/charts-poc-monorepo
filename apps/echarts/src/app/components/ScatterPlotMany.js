import React, { useMemo, useState } from 'react';

import { generateScatterplotsData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput } from './common/Inputs';

const SactterPlotMany = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);

  const data1 = useMemo(() => {
    const generatedData = generateScatterplotsData(numberOfPoints);
    return formatData(generatedData);
  }, [numberOfPoints]);

  const data2 = useMemo(() => {
    const generatedData = generateScatterplotsData(numberOfPoints + 5);
    return formatData(generatedData);
  }, [numberOfPoints]);

  const data3 = useMemo(() => {
    const generatedData = generateScatterplotsData(numberOfPoints - 5);
    return formatData(generatedData);
  }, [numberOfPoints]);

  const data4 = useMemo(() => {
    const generatedData = generateScatterplotsData(numberOfPoints + 3);
    return formatData(generatedData);
  }, [numberOfPoints]);

  const data5 = useMemo(() => {
    const generatedData = generateScatterplotsData(numberOfPoints);
    return formatData(generatedData);
  }, [numberOfPoints]);

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
        data: data1,
      },
      {
        type: 'scatter',
        name: 'Series B',
        large: true,
        data: data2,
      },
      {
        type: 'scatter',
        name: 'Series C',
        large: true,
        data: data3,
      },
      {
        type: 'scatter',
        name: 'Series D',
        large: true,
        data: data4,
      },
      {
        type: 'scatter',
        name: 'Series E',
        large: true,
        data: data5,
      },
    ],
    tooltip: {
      trigger: 'axis',
      valueFormatter: function (value) {
        return value;
      },
    },
    animationDuration: 500,
  };

  return (
    <>
      <Title>Scatter Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
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
  return data.map((entry) => [entry.x, entry.y, entry.timestamp]);
}

export default SactterPlotMany;
