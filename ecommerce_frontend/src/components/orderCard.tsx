import { Avatar, Card, CardContent, Paper, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from './Typography'
import ButtonComponent from './ButtonComponent'

const OrderCard = () => {
  return (
    <div>
        <Card sx={{width:"348px",height:"194px"}} >
           <CardContent sx={{m:1}}>
            <Stack direction={"row"}>

            <Stack>
            <Avatar/>
            </Stack>
            <Stack sx={{ml:2}}>
                <TypographyComponent text='Customers' weight='600' size='18px'/>
                <Stack direction={"row"}>
                <TypographyComponent text='Full Name:' size='14px'/>
                <TypographyComponent text='User' size='14px'/>

                </Stack>
                <Stack direction={"row"}>
                <TypographyComponent text='Email:' size='14px'/>
                <TypographyComponent text='abc@gmail.com' size='14px'/>

                </Stack>
                <Stack direction={"row"}>
                <TypographyComponent text='Phone:' size='14px'/>
                <TypographyComponent text='123456789' size='14px'/>

                </Stack>
            </Stack>
            </Stack>
                <ButtonComponent text='View Profile' variant='contained' sx={{textTransform:"none",width:"300px",height:"32px",mt:2}}/>


           </CardContent>

        </Card>
    </div>
  )
}

export default OrderCard