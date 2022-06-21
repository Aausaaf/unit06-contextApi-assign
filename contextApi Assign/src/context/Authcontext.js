import React from 'react'
import { useState } from 'react'
import {Box, Heading} from '@chakra-ui/react'
export const Authcontext = React.createContext()

export function Authcontexts({children})
{
    const [isAuth , toggleAuth] = useState(1)

    const handleAuth = (t) => {
          toggleAuth(t)
    }


return(<>
<Authcontext.Provider  value={{isAuth,handleAuth}}>
    {children}
</Authcontext.Provider>

</>);
}