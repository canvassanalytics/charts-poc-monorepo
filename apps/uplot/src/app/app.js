import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import TestPlot from './components/TestPlot';
import "/node_modules/uplot/dist/uPlot.min.css";
import { Route, Routes, Link } from 'react-router-dom';
import { generateTimeseriesDataAxisSeparately } from '../../../../libs/data-utils/src/lib/data-utils';

const optsOriginal = {
  title: "Original Plot",
  width: 800,
  height: 600,
  series: [
    {},
    {
      stroke: "red"
    }
  ]
};

const opts = {
  title: "MyPlot",
  width: 800,
  height: 600,
  // scales: {
  //   x: {
  //     time: false,
  //   },
  // },
  series: [
    {},
    // {
    //   stroke: "red"
    // }
    {
      // label: "Low",
      // fill: "rgba(0, 255, 0, .2)",
      // band: true,
      stroke: "#6172F3",
      grid: {
        width: 1 / window.devicePixelRatio,
        stroke: "#2c3235",
      },
      dash: [10, 5],

      ticks: {
        show: true,
        stroke: "#eee",
        width: 2,
        dash: [],
        size: 10,
      },
      width: 2

    },
    // {
    //   label: "High",
    //   fill: "rgba(0, 255, 0, .2)",
    //   band: true,
    //   stroke: "red"
    // },
  ]
};

const doubleOpts = {
  title: "Original Plot",
  width: 800,
  height: 600,
  series: [
    {},
    {
      stroke: "red"
    },
    {
      stroke: "blue"
    }
  ]
}

let now = Math.floor(new Date() / 1e3);

const data = [[now, now + 60, now + 120, now + 180], [1, 2, 3, 4]];
const StyledApp = styled.div`
  // Your style here
`; 
export function App() {
  console.log(generateTimeseriesDataAxisSeparately()) 
  console.log('data', data)
  return (
    <StyledApp>
      <TestPlot options={optsOriginal} data={generateTimeseriesDataAxisSeparately()} />
      <TestPlot options={opts} data={generateTimeseriesDataAxisSeparately()}/>
      <TestPlot options={opts} data={generateTimeseriesDataAxisSeparately(null, null, null, true)}/>
      {/* <NxWelcome title="uplot" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}
export default App;
