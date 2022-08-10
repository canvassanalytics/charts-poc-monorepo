import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import './Charts.css';

const LineChart = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);

  const generatedData = useMemo(
    () => generateTimeseriesData(numberOfPoints),
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
  };

  return (
    <div className="wrapper">
      <h1 classname="title">Line Chat</h1>
      <div className="App">
        <div className="line-chart">
          <Chart options={options} series={series} type="line" width="60%" />
        </div>
      </div>
    </div>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default LineChart;
