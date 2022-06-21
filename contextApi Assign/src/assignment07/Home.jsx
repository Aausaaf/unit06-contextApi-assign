import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = (props) => {
    const [name,setname] = useState("")
    const [price,setprice] = useState("")
   
    const adds =  () => {
       axios.post(`http://localhost:3000/array`,
        props.all
       ).then(res=>{
        console.log(res)
       }).catch(err=>{
        console.log(err)
       })
    } 
    useEffect(()=>{
        adds() 
        props.setall()
    },[props.all])
    const tem = {
        name:name,
        price:price
    }
  return (
    <>
    <Container mt="15vh">
        <Heading textAlign="center" >Add Product</Heading>
        <Input mt="6vh" placeholder='Enter Product Name' value={name} 
        onChange={
            (e)=>{
                setname(e.target.value)
            }
        }
        
        
        ></Input>
        <Input mt="2vh" placeholder='Enter Product Price' value={price} 
        onChange={
            (e)=>{
                setprice(e.target.value)
            }
        }
        
        
        ></Input>
        <Button mt="5vh" w="15vw" ml="20vh" onClick={
            ()=>{
             props.setall(tem)
             setname("")
             setprice("")
            }
        }>ADD</Button>
    </Container>
    
    </>
  )
}

export default Home