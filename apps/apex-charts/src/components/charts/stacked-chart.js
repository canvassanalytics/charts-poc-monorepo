import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateBarData } from '@charts-poc-mono/data-utils';
import './Charts.css';
import LineChart from './line-chart';

const StackedChart = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);

  const generatedData = useMemo(
    () => generateBarData(numberOfPoints),
    [numberOfPoints]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const series = [
    //data on the y-axis
    {
      name: 'Date',
      type: 'column',
      data: generatedData,
    },
    {
      name: 'Date',
      type: 'column',
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
    stacked: true,
    toolbar: {
      show: true,
    },
    title: {
      text: 'Line Chart',
      align: 'left',
    },
  };

  return (
    <div className="wrapper">
      <h1 classname="title">Stacked Chart</h1>
      <div className="line-chart">
        <Chart options={options} series={series} type="line" width="60%" />
      </div>
    </div>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default StackedChart;
