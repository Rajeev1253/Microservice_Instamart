import { Card, CardContent, Stack } from '@mui/material'
import React from 'react'
import productImg from "../../src/assets/svg/Rectangle 10.svg"
import TypographyComponent from './Typography'

const ProductCard = () => {
  return (
    <div>
        <Card sx={{width:"360px",height:"298px"}}>
            <CardContent sx={{m:2}}>
                <Stack direction={"row"}>
                    <img src={productImg} style={{width:"84px",height:"84px"}}></img>
                    <Stack>
                        <TypographyComponent text='Lorem ipsum' weight='600' size='18px'/>
                        <TypographyComponent text='Battery' size='12px'/>
                        <TypographyComponent text='110'/>
                    </Stack>
                </Stack>
                <Stack>
                    <TypographyComponent text='Summary' weight='600' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum ut corporis rem, molestiae impedit!</p>
                </Stack>
                <Stack>
                        
                </Stack>

            </CardContent>

        </Card>
    </div>
  )
}

export default ProductCard