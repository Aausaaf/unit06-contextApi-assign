import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box  display="flex" justifyContent="space-around" bg='pink' w='100%' h="10vh" p={4} color='white'>
    <NavLink to="/"><Heading cursor="pointer" mt="-1.3vh" >Home</Heading></NavLink>
      <NavLink to="/product"><Heading cursor="pointer"  mt="-1.3vh" >Product</Heading></NavLink>
     
    
</Box>

  )
}

export default Navbar