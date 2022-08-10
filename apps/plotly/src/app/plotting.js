/* Abstraction layer around the Plotly.js library */
import Plotly from 'plotly.js-cartesian-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';

// use slimmer version of plotly distribution
const Plot = createPlotlyComponent(Plotly);
export default Plot;
