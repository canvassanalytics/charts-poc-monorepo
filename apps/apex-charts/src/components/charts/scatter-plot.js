import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateScatterplotsData } from '@charts-poc-mono/data-utils';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput, Toggle } from '../shared/input';
import './Charts.css';

const ScatterPlot = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);

  const generatedData = useMemo(
    () => generateScatterplotsData(numberOfPoints),
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
      categories: data,
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
        {/* <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints} />
        <Toggle
          label="Downsample Data"
          isOn={downsample}
          setIsOn={setDownsample}
        /> */}
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
