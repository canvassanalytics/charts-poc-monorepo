import styled from 'styled-components/macro';
import { useState } from 'react';

import { generateBarData } from '@charts-poc-mono/data-utils';

import Plot from '../plotting';

export default function LineChart(props) {
  const [numberOfBars, setNumberOfBars] = useState(1000);

  // Prepare data
  const rawData = generateBarData(numberOfBars);

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
            value={numberOfBars}
            onChange={(e) => setNumberOfBars(e.target.value)}
          />
        </div>
      </ChartControls>

      <Plot
        data={[
          {
            type: 'bar',
            x: xArray,
            y: yArray,
          },
        ]}
        layout={{
          title: 'Bar chart',
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
