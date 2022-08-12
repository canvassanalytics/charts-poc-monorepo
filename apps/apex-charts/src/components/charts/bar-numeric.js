import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateHistogramData } from '@charts-poc-mono/data-utils';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput, Toggle } from '../shared/input';
import './Charts.css';

const BarNumeric = (props) => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);
  const [numberOfBins, setNumberOfBins] = useState(100);

  const generatedData = useMemo(
    () => generateHistogramData(numberOfBins),
    [numberOfBins]
  );

  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const series = [
    //data on the y-axis
    {
      name: 'Data',
      data: generatedData,
    },
  ];

  console.log(generatedData);
  const options = {
    //data on the x-axis
    chart: { id: 'bar-chart' },
    xaxis: {
      type: 'numeric',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Bar Chart (Numeric)',
      align: 'left',
    },
  };

  return (
    <>
      <ControlBar>
        <NumericInput
          label="Number of Bins"
          value={numberOfBins}
          setValue={setNumberOfBins}
        />
      </ControlBar>
      <Wrapper>
        <Chart
          options={options}
          series={series}
          type="bar"
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

export default BarNumeric;
