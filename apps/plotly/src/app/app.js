import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './home/Home';
import LineChart from './line-chart/LineChart';
import BarChart from './bar-chart/BarChart';

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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/line-chart">Line Chart</NavLink>
        </li>
        <li>
          <NavLink to="/bar-chart">Bar Chart</NavLink>
        </li>
      </Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/bar-chart" element={<BarChart />} />
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
    color: black;
    text-decoration: none;
  }

  a:hover {
    background-color: yellow;
  }
`;

const NavLink = styled(UnstyledNavLink)`
  &.active {
    font-weight: bold;
  }
`;
