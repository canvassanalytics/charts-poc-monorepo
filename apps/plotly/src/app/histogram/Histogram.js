import styled from 'styled-components/macro';
import { useState } from 'react';

import { generateHistogramData } from '@charts-poc-mono/data-utils';

import Plot from '../plotting';

export default function Histogram(props) {
  const [numberOfPoints, setNumberOfPoints] = useState(1000);

  // Prepare data
  const rawData = generateHistogramData(numberOfPoints);

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
      </ChartControls>

      <Plot
        data={[
          {
            x: yArray,
            type: 'histogram',
          },
        ]}
        layout={{
          title: 'Histogram',
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
