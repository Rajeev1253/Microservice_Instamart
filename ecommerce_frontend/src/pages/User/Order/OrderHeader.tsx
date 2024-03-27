    import { Stack, Typography } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'
import { blue } from '@mui/material/colors'
    
    const OrderHeader = () => {
      return (
        <Stack>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

            <Stack direction={"row"} alignItems={"center"} >
                <TypographyComponent text='OrderID:'/>
                <TypographyComponent text='6034587910' size='20px' weight='600'/>
            </Stack>
            <Stack>
                <TypographyComponent text='In Progress' weight='600' sx={{color:blue}}/>
            </Stack>
            </Stack>
        </Stack>
      )
    }
    
    export default OrderHeader