import React, { useState } from 'react'
import Navbar from './Navbar'
import {Route,Routes} from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import Productdetails from './Productdetails'
import NotFound from './NotFound'
const Routing = () => {
  const [all,setall] = useState()
  const handleset = (t) => {
    setall(t)
  }
  return (
    <>
     <Navbar></Navbar>
    <Routes>
<Route path='/' element={<Home all={all} setall={handleset}></Home>}/>
   
<Route path='/product' element={<Product all={all}></Product>}>   </Route>
  <Route path='/product/:id' element={<Productdetails></Productdetails>}/>
  <Route path='*' element={<NotFound></NotFound>}/>
  </Routes>
    
    </>
  )
}

export default Routing