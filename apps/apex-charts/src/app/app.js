import React from 'react';
// import styled from 'styled-components';
import { Navbar } from '../components/navbar/navbar';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LineChart from '../components/charts/line-chart';
import AreaChart from '../components/charts/area-chart';
import ScatterPlot from '../components/charts/scatter-plot';
import BarCategory from '../components/charts/bar-category';
import BarNumeric from '../components/charts/bar-numeric';
import ComboChart from '../components/charts/combo-chart';
import StackedChart from '../components/charts/stacked-chart';

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
