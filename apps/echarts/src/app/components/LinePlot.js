import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';


const LinePlot = () => {
    const [numberOfPoints, setNumberOfPoints] = useState(100);
    const [showPoints, setShowPoints] = useState(true);
    const [downsample, setDownsample] = useState(false);


    const generatedData = useMemo(() => generateTimeseriesData(numberOfPoints), [numberOfPoints]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'time',
            boundaryGap: false,
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
            type: 'line',
            showSymbol: showPoints,
            sampling: downsample ? 'lttb': null,
            data,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };

    return (
        <>
            <Title>Line Plot</Title>
            <ControlBar>
                <NumericInput
                    label="Number of Points"
                    value={numberOfPoints}
                    setValue={setNumberOfPoints}
                />
                <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints}/>
                <Toggle label="Downsample Data" isOn={downsample} setIsOn={setDownsample}/>
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

export default LinePlot;
