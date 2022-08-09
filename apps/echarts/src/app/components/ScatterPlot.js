import React, { useMemo, useState } from 'react';

import { generateScatterplotsData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput } from './common/Inputs';


const SactterPlot = () => {
    const [numberOfPoints, setNumberOfPoints] = useState(100);


    const generatedData = useMemo(() => generateScatterplotsData(numberOfPoints), [numberOfPoints]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'value',
            boundaryGap: false,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'scatter',
            large: true,
            data,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };

    return (
        <>
            <Title>Scatter Plot</Title>
            <ControlBar>
                <NumericInput label="Number of Points" value={numberOfPoints} setValue={setNumberOfPoints}/>
            </ControlBar>
            <Wrapper>
                <EChart options={options}/>
            </Wrapper>
        </>
    )
}

function formatData(data) {
    if (!data) return [];
    return data.map(entry => [entry.x, entry.y]);
};

export default SactterPlot;