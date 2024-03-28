import React from 'react'
import signin from "../assets/Images/signin.png"
import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import TypographyComponent from '../components/Typography'

import Checkbox from '@mui/material/Checkbox';
const Login = () => {
  return (
    <div>
        <Stack justifyContent={"center"} alignItems={"center"} height={"85vh"} >
        <Paper elevation={1} sx={{width:"50%",height:"470px"}}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>

          <Stack  width={"100%"}>
          <img src={signin} style={{width:"100%",height:"450px",marginTop:"20px",marginLeft:"20px"}}></img>
          </Stack>
          <Stack sx={{ml:4,mr:4}} width={"100%"} justifyContent={"center"} >
            <TypographyComponent text='Sign In' weight='600' size='25px'/>
            <Stack gap={"20px"} >
            <Stack width={"100%"} sx={{mt:2}}>
            <TypographyComponent text='Your email' weight='500' size='12px'/>
            <Paper elevation={1} sx={{bgcolor:"#EFEFEF78",borderRadius:"20px"}}>
            <TextField  variant='standard'  placeholder='name@example.com'  InputProps={{disableUnderline:true}} sx={{p:1,width:"100%"}}/>
            </Paper>
            </Stack>
            <Stack>
            <TypographyComponent text='Password' weight='500' size='12px'/>
            <Paper sx={{bgcolor:"#EFEFEF78",borderRadius:"20px"}}>
            <TextField variant='standard'  type='password' InputProps={{disableUnderline:true}} sx={{p:1}}/>
            </Paper>
            </Stack>
            
            <Stack direction={"row"}>
              <Checkbox  sx={{width:"20px",height:"20px"}} />
              <TypographyComponent text='Remember me' sx={{ml:1}} size='12px'/>
            </Stack>
            <Stack>
              <Button variant='contained' sx={{textTransform:"NONE",borderRadius:"12px"}}>Sign In</Button>
            </Stack>
            </Stack>

          </Stack>
          </Stack>

        </Paper>

      </Stack>
    </div>
  )
}

export default Login