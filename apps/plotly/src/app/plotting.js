/* Abstraction layer around the Plotly.js library */
import Plotly from 'plotly.js-cartesian-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';

// use slimmer version of plotly distribution
const Plot = createPlotlyComponent(Plotly);

// Make responsive
Plot.defaultProps.useResizeHandler = true;
Plot.defaultProps.style = { width: '100%', height: '100%' };

export default Plot;
