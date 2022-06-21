import React, { useContext } from 'react'
import {
  Button,
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Usercontexts } from './context/Usercontext';
import SS from './assignment06/SS';

import Routing from './assignment07/Routing';
import { Authcontexts } from './context/Authcontext';
function App() {

  return (
    <Usercontexts>
       <Authcontexts>
    <ChakraProvider theme={theme}>
     
     <SS></SS> 

   
  
    </ChakraProvider>
    </Authcontexts>
    </Usercontexts>
   
  
  );
}

export default App;
