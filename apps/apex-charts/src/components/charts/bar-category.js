import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import { generateBarData } from '@charts-poc-mono/data-utils';
import { Wrapper, ControlBar } from '../shared/commonComponents';
import { NumericInput } from '../shared/input';
import './Charts.css';

const BarCategory = (props) => {
  const [numberOfBars, setNumberOfBars] = useState(5);

  const generatedData = useMemo(
    () => generateBarData(numberOfBars),
    [numberOfBars]
  );
  const data = useMemo(() => formatData(generatedData), [generatedData]);

  const series = [
    //data on the y-axis
    {
      data: generatedData,
    },
  ];

  const options = {
    //data on the x-axis
    chart: { id: 'bar-chart' },
    xaxis: {
      boundaryGap: true,
      tickAmount: 10,
    },
    plotOptions: {
      dataLabels: {
        enabled: false,
      },
    },
    title: {
      text: 'Bar Chart (Category)',
      align: 'left',
    },
  };

  console.log(generatedData);
  return (
    <>
      <ControlBar>
        <NumericInput
          label="Number of Bars"
          value={numberOfBars}
          setValue={setNumberOfBars}
        />
        {/* <Toggle
          label="Include Negatives"
          isOn={includeNegatives}
          setIsOn={setIncludeNegatives}
        /> */}
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

export default BarCategory;
