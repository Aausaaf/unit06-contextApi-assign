import { Container, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const [data,setdata] = useState()
    const getdata= () => {
      axios.get(`http://localhost:3000/array`).then(res=> setdata(res.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
     getdata()
    },[props.all])
  return (
    <div style={{marginTop:"6vh"}}>
       <Heading textAlign="center">Product Name</Heading>
    {
    
      (data != null)?data.map( (el) => {
        return (
          <>
           {
            (el.name != null)?  <Container w="100vw" ml="64vh" display="flex" mt="1vh"><Heading  w="70vw" textAlign="left" >{el.name}  </Heading> <Link style={{marginLeft:"10vw", marginTop:"2.4vh" ,width:"30vw", color:"red"}} to={`/product/${el.id}`}>Get details</Link></Container> : " "
           }     
              
          </>
        )
       }): " "
    }
    </div>
  )
}

export default Product