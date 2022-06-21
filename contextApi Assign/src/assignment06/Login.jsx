import { Button, Container, Input } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Userdetails from './Userdetails'
import { Usercontext, Usercontexts } from '../context/Usercontext'
import { useContext } from 'react'

const Login = () => {

  const [email,setemail] = useState("")
  const [password , setpassword] = useState("")
  const [alldata,setalldata] = useState({})
  const {handleuser} = useContext(Usercontext)
  useEffect(()=>{
   fetchs(alldata)
  },[alldata])

  const fetchs = (alldata) => {
    fetch(`https://reqres.in/api/login`,{
      method: "POST",
      body:JSON.stringify(alldata)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      console.log(res)
      if(res.token)
      {
        handleuser(res.token)
      }
    }).catch((err)=>{
      console.log(err)
    })
 }
 





  return (
    <>
  <Container  mt="15vh">
  <Input w="60vh" mb="2vh"  placeholder='Enter Email id'  value={email} onChange={(e)=>{
      setemail(e.target.value)
    }}></Input>
        <Input  w="60vh"  placeholder='Enter Password'  value={password} onChange={(e)=>{
      setpassword(e.target.value)
    }}></Input>
    <Button onClick={()=>{
      setalldata({
        email:email,
        password:password,
      })
    }} mt="6vh" ml="15vh" w="30vh">Submit</Button>
  </Container>
    </>
    
  )
}

export default Login