import { useContext } from 'react'
import { Usercontext } from '../context/Usercontext'
import {Box,Container, Heading} from '@chakra-ui/react'
import React from 'react'

const Userdetails = (props) => {
    const {isuser} = React.useContext(Usercontext) 
  return (
   <>
  <Container mt="30vh">  <Heading w="100vh">  User Token Id : {isuser} </Heading></Container>
      {
        console.log(isuser)
      }
      
   </>
  )
}

export default Userdetails