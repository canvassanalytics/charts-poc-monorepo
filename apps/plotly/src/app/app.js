import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './home/Home';
import LineChart from './line-chart/LineChart';

const StyledApp = styled.div`
  // Your style here
`;
export default function App() {
  return (
    <StyledApp>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Navigation role="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/line-chart">Line Chart</Link>
        </li>
      </Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/line-chart" element={<LineChart />} />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 1rem;
  background-color: lightgray;

  li {
    padding: 5px;
  }

  li:hover {
    background-color: yellow;
  }

  li:not(:last-child) {
    margin-right: 1em;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  a:hover {
    background-color: yellow;
  }
`;
