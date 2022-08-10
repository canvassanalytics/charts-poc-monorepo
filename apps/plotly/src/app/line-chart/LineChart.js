import { generateTimeseriesData } from '@charts-poc-mono/data-utils';

import Plot from '../plotting';

export default function LineChart(props) {
  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'lines+points',
          x: xArray,
          y: yArray,
          marker: { color: 'red' },
        },
      ]}
      layout={{
        title: 'Line plot',
      }}
      config={{
        scrollZoom: true,
      }}
    />
  );
}

// Prepare data for the line chart
const rawData = generateTimeseriesData(1000, 60, true);

const xArray = [];
const yArray = [];

rawData.map(function ({ x, y }) {
  xArray.push(x);
  yArray.push(y);
});
