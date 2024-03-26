import React from 'react'
import TypographyComponent from './Typography'
import { TextField } from '@mui/material'
interface InputProps {
    text:string,
    size:string,
    weight:string,
    variant:string
}
const InputComponent = (props:InputProps) => {
  return (
    <div style={{border:"2px solid black"}}> 

        <TypographyComponent text={props.text} size={props.size} weight={props.weight}/>
        <TextField variant='standard'  InputProps={{ disableUnderline: true }}></TextField>
    </div>
  )
}

export default InputComponent