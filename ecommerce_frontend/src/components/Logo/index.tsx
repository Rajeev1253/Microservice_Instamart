import React from 'react'
import logo from "../../assets/svg/logo.svg"
import {Box, Stack, Typography} from "@mui/material"


const Logo = () => {
  return (
    <div>
      <Stack direction={'row'} sx={{ml:5,mt:1.5}}>
        <Box component="img" src={logo} sx={{width:"32px"}}></Box>
      <Typography fontSize={"22px"} fontFamily={"poppins"} fontWeight={600} sx={{pl:1}} >Flight Ease</Typography>
      </Stack>
      {/* <img src={logo}></img> */}
      
        

    </div>
  )
}

export default Logo