import React, { useMemo, useState } from 'react';

import { generateTimeseriesData } from '@charts-poc-mono/data-utils';
import EChart from './EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';


const ComboPlot = () => {
    const [numberOfPoints, setNumberOfPoints] = useState(100);
    const [showPoints, setShowPoints] = useState(false);
    const [downsample, setDownsample] = useState(false);
    const [isBarOntop, setIsBarOntop] =  useState(false);


    const generatedData = useMemo(() => generateTimeseriesData(numberOfPoints, 60, false), [numberOfPoints]);
    const data = useMemo(() => formatData(generatedData), [generatedData]);

    const generatedBarData = useMemo(() => generateTimeseriesData(numberOfPoints, 120, false), [numberOfPoints]);
    const barData = useMemo(() => formatData(generatedBarData), [generatedBarData]);
    console.log(barData, data)

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
            type: 'bar',
            large: true,
            z: isBarOntop ? 5 : 2,
            data: barData,
          },
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

    return (
        <>
            <Title>Combo Plot</Title>
            <ControlBar>
                <NumericInput
                    label="Number of Points"
                    value={numberOfPoints}
                    setValue={setNumberOfPoints}
                />
                <Toggle label="Show Points" isOn={showPoints} setIsOn={setShowPoints}/>
                <Toggle label="Downsample Data" isOn={downsample} setIsOn={setDownsample}/>
                <Toggle label="Show Bars Ontop" isOn={isBarOntop} setIsOn={setIsBarOntop}/>
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

export default ComboPlot;
