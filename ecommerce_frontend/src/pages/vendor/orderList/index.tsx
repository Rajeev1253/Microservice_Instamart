import react, { useState } from "react"
import OrdeHeader from './ordeHeader'
import { Stack } from '@mui/material'
import OrderBody from "./orderBody"


const index = () => {
   
  return (
    <div>
       <Stack>

        <Stack sx={{ml:3,mr:4}}>
        <OrdeHeader/>
        </Stack>
        <Stack>
            <OrderBody/>
        </Stack>
       </Stack>
        
    </div>
  )
}

export default index