import { Button, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
interface ButtonProps {
    text:string     
    icon:any
}
const Buttons = (props:ButtonProps) => {
  return (
    <Button sx={{mt:3} }>
        <img src={props.icon}></img>
    <Typography sx={{
        textTransform:"none",
        color:"black",
        pl:1,
        fontFamily:"poppins",
        fontWeight:500,
        fontSize:"17.39px",
        lineHeight:"26.09px"
    }}>{props.text}</Typography>
    </Button>
  )
}

export default Buttons