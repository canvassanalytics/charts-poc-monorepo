import { useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';

import Plot from '../plotting';

export default function LineChart(props) {
  const [isShowRangeSlider, setIsShowRangeSlider] = useState(false);

  return (
    <div>
      <label htmlFor="show-range-slider">
        <input
          type="checkbox"
          id="show-range-slider"
          checked={isShowRangeSlider}
          onChange={() => {
            setIsShowRangeSlider(!isShowRangeSlider);
          }}
        />
        Show range slider
      </label>

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
          xaxis: {
            rangeslider: { visible: isShowRangeSlider },
          },
        }}
        config={{
          scrollZoom: true,
        }}
      />
    </div>
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
