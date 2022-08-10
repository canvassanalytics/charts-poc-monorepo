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
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

// Register the required components
echarts.use(
  [
    LineChart, ScatterChart, ToolboxComponent, MarkPointComponent, MarkLineComponent,
    MarkAreaComponent, LegendComponent, DataZoomComponent, DataZoomInsideComponent,
    DataZoomSliderComponent,  DatasetComponent, TitleComponent, TooltipComponent,
    GridComponent, BarChart, CanvasRenderer
  ]
);

echarts.registerTheme('light', {
    color: [
      "hsla(233, 86%, 67%, 1)",
      "hsla(36, 86%, 67%, 1)"
    ],
    backgroundColor: 'hsla(252, 100%, 99%, 0.3)',
    timeAxis: {
      axisLabel: {
        fontFamily: "sans-serif",
        color: "#8B899D"
      },
      axisLine: {
        show: true,
        lineStyle: {
            color: "hsla(240, 13%, 91%, 1)"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
            color: [
                "hsla(269, 23%, 25%, 0.05)"
            ]
        }
      }
    },
    valueAxis: {
      axisLabel: {
        fontFamily: "sans-serif",
        color: "#8B899D"
      },
      axisLine: {
        show: true,
        lineStyle: {
            color: "hsla(240, 13%, 91%, 1)"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
            color: [
                "hsla(269, 23%, 25%, 0.05)"
            ]
        }
      }
    },
    dataZoom: {
      dataBackgroundColor: "hsla(240, 13%, 91%, 1)", //border
      backgroundColor: "hsla(0, 100%, 100%, 1)", // Unselected area
      fillerColor: "hsla(261, 84%, 58%, 0)", // selected area
      dataBackground: {
        lineStyle: {
          color: "hsla(233, 86%, 67%, 0.2)",
          width: 1.75
        },
        areaStyle: {opacity: 0}
      },
      selectedDataBackground: {
        lineStyle: {
          color: "hsla(233, 86%, 67%, 1)",
          width: 1.75
        },
        areaStyle: {opacity: 0}
      },
      handleSize: '150%',
      handleIcon: "path://M1 1 h1 v12 h-1 v-12  z",
      handleStyle: {
        color: "hsla(261, 84%, 58%, 0.8)",
        borderWidth: 0
      },
      moveHandleStyle: {
        color: "hsla(261, 84%, 58%, 0.1)"
      },
      emphasis: {
        moveHandleStyle: {color: "hsla(261, 84%, 58%, 0.3)"}
      },
      textStyle: {
          color: "#999999"
      }
  }
})
echarts.registerTheme('dark', {
    backgroundColor: 'grey'
})

const EChart = ({ options, theme = 'light' }) => (
    // The usage of ReactEChartsCore are same with above.
    <ReactEChartsCore
        echarts={echarts}
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={theme}
        style={{height: '100%', width: '100%'}}
        // onChartReady={onReady}
        // onEvents={events}
        // opts={opts}
    />
);

export default EChart;
