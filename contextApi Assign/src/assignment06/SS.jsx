import React, { useContext } from 'react'

import { Authcontext } from '../context/Authcontext'
import Login from './Login'
import Logout from './Logout'
import Navbar from './Navbar'
import Userdetails from './Userdetails'
import { Authcontexts } from '../context/Authcontext'
const SS = () => {
    const {isAuth,handleAuth} = useContext(Authcontext)
  return (
     <>
     <Navbar></Navbar>
     {console.log(isAuth)}
     {
            (isAuth == 1) ? <Login
                

                ></Login> :(isAuth==3) ?<Userdetails></Userdetails> :<Logout></Logout>
        }
    </>
  )
}

export default SS