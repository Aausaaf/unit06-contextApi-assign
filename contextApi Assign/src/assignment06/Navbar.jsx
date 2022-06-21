import React, { useContext } from 'react'

import {Box, Heading} from '@chakra-ui/react'
import Login from './Login'
import Logout from './Logout'
import Userdetails from './Userdetails'
import { Usercontext } from '../context/Usercontext'
import { Authcontext } from '../context/Authcontext'
const  Navbar = () =>  {

 const {handleAuth} = useContext(Authcontext)
    
  return (
    <>
       <Box  display="flex" justifyContent="space-around" bg='pink' w='100%' h="10vh" p={4} color='white'>
      <Heading cursor="pointer" mt="-1.3vh" onClick={()=>{
       handleAuth(1)
      }}>Login</Heading>
      <Heading cursor="pointer"  mt="-1.3vh" onClick={()=>{
        handleAuth(2)
      }}>Logout</Heading>
      <Heading cursor="pointer"  mt="-1.3vh" onClick={()=>{
       handleAuth(3)
      }}>Userdetails</Heading>
    
</Box>



    </>
  )
}

export default Navbar