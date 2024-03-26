import react, { useState } from "react"
import OrdeHeader from './ordeHeader'
import { Stack } from '@mui/material'
import OrderBody from "./orderBody"


const index = () => {
   
  return (
    <div>
       <Stack>

        <Stack>
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