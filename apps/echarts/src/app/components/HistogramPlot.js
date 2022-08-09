import React, { useMemo, useState } from 'react';

import { generateHistogramData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput } from './common/Inputs';


const HistogramPlot = () => {
    const [numberOfBins, setNumberOfBins] = useState(100);

    const generatedData = useMemo(() => generateHistogramData(numberOfBins), [numberOfBins]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'value',
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
            <Title>Histogram Plot</Title>
            <ControlBar>
                <NumericInput
                    label="Number of Bins"
                    value={numberOfBins}
                    setValue={setNumberOfBins}
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

export default HistogramPlot;
