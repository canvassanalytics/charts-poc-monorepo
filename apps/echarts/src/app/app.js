import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import LinePlot from './components/LinePlot';
import SactterPlot from './components/ScatterPlot';

const StyledApp = styled.div``;
const NavBar = styled.div``;
const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const NavItem = styled.li`
  float: left;
`;
const NavLink = styled(Link)`
  display: block;
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: black;
    font-weight: 600;
  }
`;

export function App() {
  return (
    <StyledApp>
      <NavBar role="navigation">
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/line">Line Plot</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/scatter">Scatter Plot</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
      <Routes>
        <Route
          path="/"
          element={<h1>ECharts POC</h1>}
        />
        <Route
          path="/line"
          element={<LinePlot />}
        />
        <Route
          path="/scatter"
          element={<SactterPlot />}
        />
      </Routes>
    </StyledApp>
  );
}
export default App;
