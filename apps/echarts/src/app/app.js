import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import LinePlot from './components/LinePlot';

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
  // const data = generateTimeseriesData(10);
  return (
    <StyledApp>
      {/* <div>
        {data.map(datum => <p>x: {datum.x} y: {datum.y}</p>)}
      </div> */}
      <NavBar role="navigation">
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/line">Line Plot</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
      <br />
      <Routes>
        <Route
          path="/"
          element={<h1>ECharts POC</h1>}
        />
        <Route
          path="/line"
          element={<LinePlot />}
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}
export default App;
