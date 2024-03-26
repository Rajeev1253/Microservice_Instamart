import { SxProps, Typography } from '@mui/material'
import React from 'react'
interface TypographyComponentProps {
    size?:string;
    weight?:string;
    text:string;
    sx?:SxProps
}
const TypographyComponent = (props:TypographyComponentProps) => {
  return (
    <div>
        <Typography fontSize={props.size} fontWeight={props.weight} sx={props.sx}>{props.text}</Typography>
    </div>
  )
}

export default TypographyComponent