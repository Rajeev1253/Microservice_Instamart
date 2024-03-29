import { OutlinedInput, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'

interface DetailsProps {
    text:string,

}

const DetailsColumn = (props:DetailsProps) => {
  return (
    <div>
        <Stack sx={{mt:1}}>
                    <TypographyComponent text={props.text} weight='600'/>
                    <Stack sx={{mt:2}}>

                    <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
          />

          
                    </Stack>

            </Stack>
    </div>
  )
}

export default DetailsColumn