import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'

import FinalTable from '../components/FinalTable/FinalTable';
import BasicTable from '../components/BasicTable/BasicTable';
import ExpandableRow from '../components/ExpandableRow/ExpandableRow';

const StyledApp = styled.div`
  width: 50%,
  overflow-x: scroll; 
  overflow-y: scroll; 
`;

export function App() {
  return (
    <ChakraProvider>
      <StyledApp>
        <FinalTable />
        {/* <BasicTable />
        <ExpandableRow /> */}
      </StyledApp>
    </ChakraProvider>
  );
}
export default App;
