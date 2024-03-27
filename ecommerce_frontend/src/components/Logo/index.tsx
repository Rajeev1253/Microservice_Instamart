import React from 'react'
import logo from "../../assets/svg/logo.svg"
import {Box, Stack, Typography} from "@mui/material"


const Logo = () => {
  return (
    <div>
      <Stack direction={'row'} flexWrap='nowrap'>
        <Box component="img" src={logo}></Box>
      <Typography fontSize={"22px"} fontFamily={"poppins"} fontWeight={600} sx={{pl:1}}>InstaCart</Typography>
      </Stack>
      {/* <img src={logo}></img> */}
      
        

    </div>
  )
}

export default Logo