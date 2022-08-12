import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateApexScatterplotsData } from '@charts-poc-mono/data-utils';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput } from '../shared/input';
import './Charts.css';

const ScatterPlot = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);

  const generatedData = useMemo(
    () => generateApexScatterplotsData(numberOfPoints),
    [numberOfPoints]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const series = [
    //data on the y-axis
    {
      name: 'Date',
      data: generatedData,
    },
  ];

  const options = {
    //data on the x-axis
    chart: { id: 'line-chart' },
    xaxis: {
      type: 'datetime',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Scatter Plot',
      align: 'left',
    },
  };

  return (
    <>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
        />
      </ControlBar>
      <Wrapper>
        <Chart
          options={options}
          series={series}
          type="scatter"
          width="100%"
          height="100%"
        />
      </Wrapper>
    </>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default ScatterPlot;
