import styled from 'styled-components/macro';
import { useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';

import Plot from '../plotting';

export default function LineChart(props) {
  const [numberOfPoints, setNumberOfPoints] = useState(1000);
  const [isShowRangeSlider, setIsShowRangeSlider] = useState(false);

  // Prepare data for the line chart
  const rawData = generateTimeseriesData(numberOfPoints, 60, true);

  const xArray = [];
  const yArray = [];

  rawData.map(function ({ x, y }) {
    xArray.push(x);
    yArray.push(y);
  });

  return (
    <div>
      <ChartControls>
        <div>
          <label>Number of points:</label>
          <input
            type="number"
            value={numberOfPoints}
            onChange={(e) => setNumberOfPoints(e.target.value)}
          />
        </div>

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
      </ChartControls>

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

const ChartControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
