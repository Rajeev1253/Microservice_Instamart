import { Avatar, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'

const TitleCard = () => {
  return (
    <div>
        <Stack direction={"row"} sx={{mt:2}}>
            <Stack><Avatar/></Stack>
            <Stack sx={{ml:1}}>
                <TypographyComponent text='Sprout Farmer Market' weight='600'/>
                <TypographyComponent text='Delivery'/>
            </Stack>

        </Stack>
    </div>
  )
}

export default TitleCard