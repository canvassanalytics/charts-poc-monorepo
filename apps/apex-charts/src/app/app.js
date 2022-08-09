import React from 'react';
// import styled from 'styled-components';
import { Navbar } from '../components';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LineChart from '../pages/line-chart';
import AreaChart from '../pages/area-chart';
import ScatterPlot from '../pages/scatter-plot';
import BarCategory from '../pages/bar-category';
import BarNumeric from '../pages/bar-numeric';
import ComboChart from '../pages/combo-chart';
import StackedChart from '../pages/stacked-chart';

// const StyledApp = styled.div`
//   // Your style here
// `;

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LineChart />} />
        <Route path="/area-chart" element={<AreaChart />} />
        <Route path="/scatter-plot" element={<ScatterPlot />} />
        <Route path="/bar-category" element={<BarCategory />} />
        <Route path="/bar-numeric" element={<BarNumeric />} />
        <Route path="/combo-chart" element={<ComboChart />} />
        <Route path="/stacked-chart" element={<StackedChart />} />
      </Routes>
    </Router>
  );
}
export default App;
