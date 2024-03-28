import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import shark from "../../../assets/svg/shark.svg"
import TypographyComponent from '../../../components/Typography'

const ProductCard = () => {
  return (
    <div>
        <Card sx={{width:"138px",height:"208px",m:2}}>
            <CardContent>
                <Stack >
                    <Stack>
                        <img src={shark}></img>
                    </Stack>
                    <Stack>
                    <TypographyComponent text='Shark toy'/>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCard