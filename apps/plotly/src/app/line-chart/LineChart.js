import Plot from '../plotting';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';

export default function LineChart(props) {
  return (
    <Plot
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
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
        width: 640,
        height: 480,
        title: 'Line plot',
      }}
      config={{
        responsive: true,
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
