import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './home/Home';
import LineChart from './line-chart/LineChart';

const StyledApp = styled.div`
  // Your style here
`;
export function App() {
  return (
    <StyledApp>
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
            <Link to="/line-chart">Line Chart</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/line-chart" element={<LineChart />} />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}
export default App;
