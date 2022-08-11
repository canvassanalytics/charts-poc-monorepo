import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import TestPlot from './components/TestPlot';
import "/node_modules/uplot/dist/uPlot.min.css";
import { Route, Routes, Link } from 'react-router-dom';
import { generateTimeseriesData } from '@charts-poc-mono/data-utils';

const opts = {
  title: "MyPlot",
  width: 200,
  height: 200,
  series: [
    {},
    // {
    //   stroke: "red"
    // }
    {
      // label: "Low",
      // fill: "rgba(0, 255, 0, .2)",
      // band: true,
      stroke: "red"

    },
    // {
    //   label: "High",
    //   fill: "rgba(0, 255, 0, .2)",
    //   band: true,
    //   stroke: "red"
    // },
  ]
};

let now = Math.floor(new Date() / 1e3);

const data = [[now, now + 60, now + 120, now + 180], [1, 2, 3, 4]];
const StyledApp = styled.div`
  // Your style here
`;
export function App() {
  return (
    <StyledApp>
      <TestPlot options={opts} data={data}/>
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
