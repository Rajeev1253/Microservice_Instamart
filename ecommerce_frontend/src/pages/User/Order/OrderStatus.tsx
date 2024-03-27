import { Paper, Stack } from '@mui/material'
import React from 'react'
import StatusComponent from '../../../components/StatusComponent'

const OrderStatus = () => {
  return (
    <div>
        <Stack sx={{mt:3}} >
            
        <Paper sx={{width:"100%", height:"90px",borderRadius:"10px"}}>
            <Stack direction={"row"} sx={{m:2}} justifyContent={"space-evenly"}>

            <StatusComponent/>
            <StatusComponent/>
            <StatusComponent/>
            <StatusComponent/>
            </Stack>
        </Paper>
        <Paper>
            
        </Paper>
        </Stack>
    </div>
  )
}

export default OrderStatus