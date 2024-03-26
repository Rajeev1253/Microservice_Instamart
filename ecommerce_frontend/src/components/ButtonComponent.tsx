import { Button, SxProps } from '@mui/material'
import React from 'react'
interface ButtonProps {
  variant?: "outlined" | "contained"| "text";
  sx?:SxProps;
  text:string;
}
const ButtonComponent = (props:ButtonProps) => {
  return (
    <Button variant={props.variant} sx={props.sx}>{props.text}</Button>
  )
}

export default ButtonComponent