import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';


const AreaPlot = () => {
    const [numberOfPoints, setNumberOfPoints] = useState(100);
    const [showPoints, setShowPoints] = useState(false);
    const [downsample, setDownsample] = useState(false);
    const [includeNegatives, setIncludeNegatives] = useState(false);
    const [showMultiple, setShowMultiple] = useState(false);


    const generatedData = useMemo(() => generateTimeseriesData(numberOfPoints, 60, includeNegatives), [numberOfPoints, includeNegatives]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const generateNewData = () => {
        const newData = generateTimeseriesData(Math.floor(numberOfPoints/2), 120, includeNegatives);
        return formatData(newData);
    }

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
            areaStyle: {},
            data,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };

    if (showMultiple) {
        options.series.push({
            type: 'line',
            showSymbol: showPoints,
            sampling: downsample ? 'lttb': null,
            areaStyle: {},
            data: generateNewData(),
        })
    }

    return (
        <>
            <Title>Area Plot</Title>
            <ControlBar>
                <NumericInput
                    label="Number of Points"
                    value={numberOfPoints}
                    setValue={setNumberOfPoints}
                />
                <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints}/>
                <Toggle label="Downsample Data" isOn={downsample} setIsOn={setDownsample}/>
                <Toggle label="Include Negatives" isOn={includeNegatives} setIsOn={setIncludeNegatives}/>
                <Toggle label="Multiple Series" isOn={showMultiple} setIsOn={setShowMultiple}/>
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

export default AreaPlot;
