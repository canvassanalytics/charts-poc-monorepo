import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';

export const SidebarData = [
  {
    title: 'Line Chart',
    path: '/',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text',
  },
  {
    title: 'Area Chart',
    path: '/area-chart',
    icon: <AiIcons.AiOutlineAreaChart />,
    cName: 'nav-text',
  },
  {
    title: 'Scatter Plot',
    path: '/scatter-plot',
    icon: <AiIcons.AiOutlineDotChart />,
    cName: 'nav-text',
  },
  {
    title: 'Bar Chart (Category)',
    path: '/bar-category',
    icon: <AiIcons.AiOutlineBarChart />,
    cName: 'nav-text',
  },
  {
    title: 'Bar Chart (Numeric)',
    path: '/bar-numeric',
    icon: <AiIcons.AiOutlineBarChart />,
    cName: 'nav-text',
  },
  {
    title: 'Combo Chart',
    path: '/combo-chart',
    icon: <TbIcons.TbChartAreaLine />,
    cName: 'nav-text',
  },
  {
    title: 'Stacked Chart',
    path: '/stacked-chart',
    icon: <MdIcons.MdAreaChart />,
    cName: 'nav-text',
  },
];
