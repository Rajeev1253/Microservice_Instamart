import { Stack } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TypographyComponent from './Typography';
const StatusComponent = () => {
  return (
    <div>
        <Stack bgcolor={"yellow"} width={"200px"} height={"50px"} justifyContent={"center"} alignItems={"center"} direction={"row"}>
            <Stack><CheckCircleIcon/></Stack>
            <Stack sx={{ml:2}}>
                <TypographyComponent text='At Pickup Location' size='12px'/>
                <TypographyComponent text='Texas 79901' size='12px'/>

            </Stack>
        </Stack>
    </div>
  )
}

export default StatusComponent