import React, { useMemo, useState } from 'react';

import { generateBarData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput } from './common/Inputs';


const BarPlot = () => {
    const [numberOfBars, setNumberOfBars] = useState(5);

    const generatedData = useMemo(() => generateBarData(numberOfBars), [numberOfBars]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            boundaryGap: true,
        },
        yAxis: {
          type: 'value',
        },
        dataZoom: [
            {
                type: 'inside'
            },
        ],
        series: [
          {
            type: 'bar',
            large: true,
            data,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
        animationDuration: 500,
      };

    return (
        <>
            <Title>Bar Plot</Title>
            <ControlBar>
                <NumericInput
                    label="Number of Bars"
                    value={numberOfBars}
                    setValue={setNumberOfBars}
                />
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

export default BarPlot;
