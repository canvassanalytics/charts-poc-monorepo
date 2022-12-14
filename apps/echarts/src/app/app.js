import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import AreaPlot from './components/AreaPlot';
import BarPlot from './components/BarPlot';
import CategoryLine from './components/CategoryLine';
import ComboPlot from './components/ComboPlot';
import HistogramPlot from './components/HistogramPlot';
import HomePage from './components/HomePage';

import LinePlot from './components/LinePlot';
import SactterPlot from './components/ScatterPlot';
import SactterPlotMany from './components/ScatterPlotMany';

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
const Link = styled(NavLink)`
  display: block;
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &.active {
    color: black;
    font-weight: 600;
  }

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
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/line">Line Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/cat-line">Cat Line Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/area">Area Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/scatter">Scatter Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/scatter-many">Scatter Many</Link>
          </NavItem>
          <NavItem>
            <Link to="/bar">Bar Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/histogram">Histogram Plot</Link>
          </NavItem>
          <NavItem>
            <Link to="/combo">Combo Plot</Link>
          </NavItem>
        </NavList>
      </NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/line" element={<LinePlot />} />
        <Route path="/cat-line" element={<CategoryLine />} />
        <Route path="/area" element={<AreaPlot />} />
        <Route path="/scatter" element={<SactterPlot />} />
        <Route path="/scatter-many" element={<SactterPlotMany />} />
        <Route path="/bar" element={<BarPlot />} />
        <Route path="/histogram" element={<HistogramPlot />} />
        <Route path="/combo" element={<ComboPlot />} />
      </Routes>
    </StyledApp>
  );
}
export default App;
