import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import BasicTable from './components/BasicTable/BasicTable';
import { ChakraProvider } from '@chakra-ui/react'
import BasicTableNew from './components/BasicTableNew/BasicTableNew';
import ExpandableRow from './components/ExpandableRow/ExpandableRow';
import BasicTableExploration from './components/TanStackTable/BasicTableExploration';
const StyledApp = styled.div`
  // Your style here
  width: 50%,
  overflow-x: scroll; 
  overflow-y: scroll; 
`;


export function App() {
  return (
    <ChakraProvider>
      <StyledApp>
      {/* <NxWelcome title="react-table" /> */}
        <BasicTableExploration/>
      </StyledApp>
    </ChakraProvider>
    
  );
}

export default App;
