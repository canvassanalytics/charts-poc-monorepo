const axisStyle = (fontColor, axisColor, gridColor) => ({
  axisLabel: {
    fontFamily: 'sans-serif',
    color: fontColor,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: axisColor,
    },
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [gridColor],
    },
  },
});

const dataBackgroundStyle = (color) => ({
  lineStyle: {
    color,
    width: 1.75,
  },
  areaStyle: { opacity: 0 },
});

const scatterStyle = {
  symbolSize: 9,
  emphasis: {
    focus: 'series',
  },
  blur: {
    itemStyle: {
      opacity: 0.3,
    },
  },
};

const handleStyle = (color) => ({
  handleSize: '150%',
  handleIcon: 'path://M1 1 h1 v12 h-1 v-12  z',
  handleStyle: {
    color: `${color.slice(0, -1)}, 0.8)`,
    borderWidth: 0,
  },
  moveHandleStyle: {
    color: `${color.slice(0, -1)}, 0.1)`,
  },
  emphasis: {
    moveHandleStyle: { color: `${color.slice(0, -1)}, 0.3)` },
  },
});

export const lightTheme = {
  color: ['hsla(233, 86%, 67%, 1)', 'hsla(36, 86%, 67%, 1)'],
  backgroundColor: 'hsla(252, 100%, 99%, 0.3)',
  timeAxis: axisStyle(
    '#8B899D',
    'hsla(240, 13%, 91%, 1)',
    'hsla(269, 23%, 25%, 0.05)'
  ),
  valueAxis: axisStyle(
    '#8B899D',
    'hsla(240, 13%, 91%, 1)',
    'hsla(269, 23%, 25%, 0.05)'
  ),
  categoryAxis: axisStyle(
    '#8B899D',
    'hsla(240, 13%, 91%, 1)',
    'hsla(269, 23%, 25%, 0.05)'
  ),
  dataZoom: {
    dataBackgroundColor: 'hsla(240, 13%, 91%, 1)', //border
    backgroundColor: 'hsla(0, 100%, 100%, 1)', // Unselected area
    fillerColor: 'hsla(261, 84%, 58%, 0)', // selected area
    dataBackground: dataBackgroundStyle('hsla(233, 86%, 67%, 0.2)'),
    selectedDataBackground: dataBackgroundStyle('hsla(233, 86%, 67%, 1)'),
    ...handleStyle('hsla(261, 84%, 58%)'),
    textStyle: {
      color: '#999999',
    },
  },
  scatter: scatterStyle,
};

export const darkTheme = {
  color: ['white', 'hsla(0, 78%, 58%, 1)'],
  backgroundColor: 'hsla(268, 16%, 16%, 1)',
  timeAxis: axisStyle(
    '#BEBDC1',
    'hsla(267, 4%, 41%, 1)',
    'hsla(267, 4%, 41%, 0.3)'
  ),
  valueAxis: axisStyle(
    '#BEBDC1',
    'hsla(267, 4%, 41%, 1)',
    'hsla(267, 4%, 41%, 0.3)'
  ),
  categoryAxis: axisStyle(
    '#BEBDC1',
    'hsla(267, 4%, 41%, 1)',
    'hsla(267, 4%, 41%, 0.3)'
  ),
  dataZoom: {
    dataBackgroundColor: 'hsla(267, 4%, 41%, 0.3)', //border
    fillerColor: 'hsla(261, 84%, 58%, 0)', // selected area
    dataBackground: dataBackgroundStyle('hsla(0, 100%, 100%, 0.3)'),
    selectedDataBackground: dataBackgroundStyle('hsla(0, 100%, 100%, 1)'),
    ...handleStyle('hsla(261, 84%, 58%)'),
    textStyle: {
      color: '#BEBDC1',
    },
  },
  scatter: scatterStyle,
};
