import { Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../../components/Typography'

const ProductHeader = () => {
  return (
    <div>
        <Stack>
            <TypographyComponent text='Product Details'/>
            <TypographyComponent text='Home >  All Products > Product Details'/>

        </Stack>
    </div>
  )
}

export default ProductHeader