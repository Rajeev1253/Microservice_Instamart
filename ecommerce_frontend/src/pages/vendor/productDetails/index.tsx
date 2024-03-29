import React from 'react'
import ProductHeader from './productHeader'
import { Stack } from '@mui/material'
import ProductBody from './ProductBody'

const index = () => {
  return (
    <div>
        <Stack sx={{m:2}}>

        <ProductHeader/>
        <Stack sx={{mt:2,ml:2,mr:2}}>

        <ProductBody/>
        </Stack>
        </Stack>
    </div>
  )
}

export default index