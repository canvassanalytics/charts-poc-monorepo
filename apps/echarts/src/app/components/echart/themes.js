const lightTheme = {
  color: ['hsla(233, 86%, 67%, 1)', 'hsla(36, 86%, 67%, 1)'],
  backgroundColor: 'hsla(252, 100%, 99%, 0.3)',
  timeAxis: {
    axisLabel: {
      fontFamily: 'sans-serif',
      color: '#8B899D',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'hsla(240, 13%, 91%, 1)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['hsla(269, 23%, 25%, 0.05)'],
      },
    },
  },
  valueAxis: {
    axisLabel: {
      fontFamily: 'sans-serif',
      color: '#8B899D',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'hsla(240, 13%, 91%, 1)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['hsla(269, 23%, 25%, 0.05)'],
      },
    },
  },
  dataZoom: {
    dataBackgroundColor: 'hsla(240, 13%, 91%, 1)', //border
    backgroundColor: 'hsla(0, 100%, 100%, 1)', // Unselected area
    fillerColor: 'hsla(261, 84%, 58%, 0)', // selected area
    dataBackground: {
      lineStyle: {
        color: 'hsla(233, 86%, 67%, 0.2)',
        width: 1.75,
      },
      areaStyle: { opacity: 0 },
    },
    selectedDataBackground: {
      lineStyle: {
        color: 'hsla(233, 86%, 67%, 1)',
        width: 1.75,
      },
      areaStyle: { opacity: 0 },
    },
    handleSize: '150%',
    handleIcon: 'path://M1 1 h1 v12 h-1 v-12  z',
    handleStyle: {
      color: 'hsla(261, 84%, 58%, 0.8)',
      borderWidth: 0,
    },
    moveHandleStyle: {
      color: 'hsla(261, 84%, 58%, 0.1)',
    },
    emphasis: {
      moveHandleStyle: { color: 'hsla(261, 84%, 58%, 0.3)' },
    },
    textStyle: {
      color: '#999999',
    },
  },
};
