import React, { useMemo, useState } from 'react';

import { generateHistogramData } from '@charts-poc-mono/data-utils';
import EChart from './echart/EChart';
import { Wrapper, Title, ControlBar } from './common/CommonComponents';
import { NumericInput, Toggle } from './common/Inputs';

const HistogramPlot = () => {
  const [numberOfBins, setNumberOfBins] = useState(100);
  const [showOverlay, setShowOverlay] = useState(false);

  const generatedData = useMemo(
    () => generateHistogramData(numberOfBins),
    [numberOfBins]
  );
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
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      pieces: [
        { max: 20, opacity: 0.5 },
        { min: 20, max: 80, opacity: 1 },
        { min: 80, opacity: 0.5 },
      ],
    },
    dataZoom: [
      {
        type: 'inside',
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

  if (showOverlay) {
    options.series[0].markArea = {
      label: { show: false },
      data: [
        [{ name: 'lower bound', itemStyle: { color: 'pink' } }, { xAxis: 20 }],
        [{ name: 'uppper bound', xAxis: 80 }, { xAxis: 'max' }],
      ],
    };
  }

  return (
    <>
      <Title>Histogram Plot</Title>
      <ControlBar>
        <NumericInput
          label="Number of Bins"
          value={numberOfBins}
          setValue={setNumberOfBins}
        />
        <Toggle
          label="Show Overlays"
          isOn={showOverlay}
          setIsOn={setShowOverlay}
        />
      </ControlBar>
      <Wrapper>
        <EChart options={options} />
      </Wrapper>
    </>
  );
};

function formatData(data) {
  if (!data) return [];
  return data.map((entry) => [entry.x, entry.y]);
}

export default HistogramPlot;
