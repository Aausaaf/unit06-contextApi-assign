import React from 'react'
import { useState } from 'react'
import {Box, Heading} from '@chakra-ui/react'
export const Usercontext = React.createContext()

export function Usercontexts({children})
{
    const [isuser , toggleuser] = useState("")

    const handleuser = (t) => {
          toggleuser(t)
    }


return(<>
<Usercontext.Provider  value={{isuser,handleuser}}>
    {children}
</Usercontext.Provider>

</>);
}