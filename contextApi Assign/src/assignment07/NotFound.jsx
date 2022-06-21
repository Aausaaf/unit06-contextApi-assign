import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
   <><Container mt="25vh" textAlign="center"> <Heading letterSpacing="0.4vh" fontSize="6vw">404 Page</Heading>
   <Heading>Page Not Found</Heading></Container>
    </>
  )
}

export default NotFound