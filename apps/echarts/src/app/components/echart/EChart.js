import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import {
  LineChart,
  BarChart,
  // PieChart,
  ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from 'echarts/charts';
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

import { lightTheme, darkTheme } from './themes';

// Register the required components
echarts.use([
  LineChart,
  ScatterChart,
  ToolboxComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
]);

echarts.registerTheme('light', lightTheme);
echarts.registerTheme('dark', darkTheme);

const EChart = ({ options, theme = 'light' }) => (
  // The usage of ReactEChartsCore are same with above.
  <ReactEChartsCore
    echarts={echarts}
    option={options}
    notMerge={true}
    lazyUpdate={true}
    theme={theme}
    style={{ height: '100%', width: '100%' }}
    // onChartReady={onReady}
    // onEvents={events}
    // opts={opts}
  />
);

export default EChart;
