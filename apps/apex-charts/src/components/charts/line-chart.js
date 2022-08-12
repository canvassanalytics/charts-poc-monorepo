import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput, Toggle } from '../shared/input';
import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import './Charts.css';

const LineChart = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [showMarkers, setShowMarkers] = useState(0);

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
      type: 'datetime',
    },
    title: {
      text: 'Line Chart',
      align: 'left',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: showMarkers ? 3 : 0,
    },
  };

  console.log(generatedData);

  return (
    <>
      <ControlBar>
        <NumericInput
          label="Number of Points"
          value={numberOfPoints}
          setValue={setNumberOfPoints}
        />
        <Toggle
          label="Show Markers"
          isOn={showMarkers}
          setIsOn={setShowMarkers}
        />
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

export default LineChart;
