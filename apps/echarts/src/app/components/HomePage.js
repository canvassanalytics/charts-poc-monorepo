import React from 'react';
import styled from 'styled-components/macro';

const HomePage = () => {
  return (
    <Wrapper>
      <h1>ECharts POC</h1>
      <br /> <br />
      <Link href="https://echarts.apache.org/en/option.html#title">
        Apache ECharts
      </Link>
      <Link href="https://www.npmjs.com/package/echarts-for-react">
        ECharts For React
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Link = styled.a`
  padding: 5px;
  color: black;
`;

export default HomePage;
