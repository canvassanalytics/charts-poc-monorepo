import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateBarData } from '@charts-poc-mono/data-utils';
import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput, Toggle } from '../shared/input';
import './Charts.css';
import LineChart from './line-chart';

const ComboChart = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showPoints, setShowPoints] = useState(true);
  const [downsample, setDownsample] = useState(false);

  const generatedData = useMemo(
    () => generateBarData(numberOfPoints),
    [numberOfPoints]
  );

  const generatedComboData = useMemo(
    () => generateTimeseriesData(numberOfPoints),
    [numberOfPoints]
  );

  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const series = [
    //data on the y-axis
    {
      name: 'Date',
      type: 'line',
      data: generatedComboData,
    },
    {
      name: 'Date',
      type: 'column',
      data: generatedData,
    },
  ];

  const options = {
    //data on the x-axis
    chart: { id: 'combo-chart' },
    xaxis: {
      type: 'numeric',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Combo Chart',
      align: 'left',
    },
    stroke: {
      curve: 'smooth',
      width: 3,
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
          type="line"
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

export default ComboChart;
