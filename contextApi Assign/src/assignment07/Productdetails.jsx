import { Container, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
const Productdetails = () => {
    const value = useParams()
    const [single,setsingle] = useState(" ")
    const singles = () => {
         axios.get(`http://localhost:3000/array/${value.id}`).then(res=>setsingle(res.data)).catch(err=> console.log(err))
    }
    useEffect(()=>{
      singles()  
    },[])
  return (
    <>    
    <Container mt="26vh"><Heading letterSpacing="0.2vh" textAlign="left"> Name : {single.name}</Heading></Container>
    <Container><Heading letterSpacing="0.2vh" textAlign="left"> Price : {single.price}</Heading></Container>
    </>
  )
}

export default Productdetails