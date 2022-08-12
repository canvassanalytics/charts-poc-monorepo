import React, { useMemo, useState } from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import {
  Wrapper,
  Title,
  ControlBar,
} from '../components/shared/CommonComponents';
import { NumericInput } from '../components/shared/Input';

const LinePlot = () => {
  const [numberOfPoints, setNumberOfPoints] = useState(100);

  const generatedData = useMemo(
    () => generateTimeseriesData(numberOfPoints),
    [numberOfPoints]
  );

  const data = useMemo(() => formatData(generatedData), [generatedData]);

  //   console.log(generatedData);
  console.log(data);

  const options = {
    title: 'Line Plot',
    width: '100%',
    height: 500,
    series: [
      {},
      {
        show: true,
        spanGaps: false,
        label: 'Date',
        points: { show: true },
        stroke: 'red',
        width: 1,
        // fill: 'blue',
      },
    ],

    scales: {
      x: { time: false },
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
        <UplotReact
          options={options}
          data={data}
          //   target={root}
          //   onCreate={(chart) => {}}
          //   onDelete={(chart) => {}}
        />
      </Wrapper>
    </>
  );
};

function formatData(data) {
  if (!data) return [];
  let x = [];
  let y = [];

  data.forEach((element) => {
    x.push(element.x);
    y.push(element.y);
  });
  return [x, y];
}
export default LinePlot;
