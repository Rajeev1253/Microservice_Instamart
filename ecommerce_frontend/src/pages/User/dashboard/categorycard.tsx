import { Card, CardContent, Stack } from '@mui/material'
import React from 'react'
import style from "./userDashboard.module.css"  
import teddy from "../../../assets/svg/teddy.svg"
import wine from "../../../assets/svg/wine.svg"
import pastry from "../../../assets/svg/pastry.svg"
import headphone from "../../../assets/svg/headphone.svg"
import toast from "../../../assets/svg/toast.svg"
import emoji from "../../../assets/svg/emoji.svg"

import beauty from "../../../assets/svg/lipstick.svg"
import party from "../../../assets/svg/party.svg"

import flower from "../../../assets/svg/flower.svg"
import trophy from "../../../assets/svg/trophy.svg"
import whisky from "../../../assets/svg/drink.svg"
import TypographyComponent from '../../../components/Typography'

const Category =[
    {
        img:trophy,
        text:"Popular",

    },
    {
        img:wine,
        text:"Wine",

    },
    {
        img:toast,
        text:"Champagne",

    },
    {
        img:whisky,
        text:"Whisky",

    },
    {
        img:flower,
        text:"Floral",

    },
    {
        img:party,
        text:"Birthday",

    },
    {
        img:pastry,
        text:"Sweet Treat",

    },
    {
        img:beauty,
        text:"Beauty",

    },
    {
        img:emoji,
        text:"Fragnance",

    },
    {
        img:teddy,
        text:"For Kids",

    },
    {
        img:headphone,
        text:"For Techies",

    },
    


]


const CategoryCard = () => {
  return (
    <div>
        <Stack direction="row" flexWrap="wrap" gap="24px">
            
            {Category.map((item)=>
            
            <Card className={style.cardBody} sx={{bgcolor:" #EFEFEF78"}}>
                <CardContent sx={{height:"100%",pt:1}}>
                    <Stack  direction={"row"} alignItems={"center"} >
                        <img src={item.img} style={{width:"40px",height:"40px"}}></img>
                        <TypographyComponent text={item.text} sx={{pl:1.5,fontStyle:"Roboto"}} size='14px' weight='600'/>
                    </Stack>
                    

                </CardContent>
            </Card>
            )}
        </Stack>
    </div>
  )
}

export default CategoryCard