import React from 'react'
import Carousels from './carousel'
import { Stack } from '@mui/material'
import CategoryCard from './categorycard'
import style from "./userDashboard.module.css"
import TitleCard from './titleCard'
import ProductCarousel from './produtCarousel'
 

const dashboard = () => {
  return (
    <div className={style.dcontainer}>
      <Stack>
        <Stack>

    <Carousels/>
        </Stack>
        <Stack sx={{mt:3}} >
          <CategoryCard/>
        </Stack>

      </Stack>
      <Stack width="100%" height="391px"  sx={{mt:5}}>
        <TitleCard/>  
        <Stack sx={{mt:2}} height={"260px"}  >
         
         <ProductCarousel/>

        </Stack>
      </Stack>
    </div>
  )
}

export default dashboard