import React from 'react'
import SimpleSidebarItem from '../../components/SimpleSidebarItem'
import GridViewIcon from '@mui/icons-material/GridView';
import { Stack } from '@mui/material';
import Logo from '../../components/Logo';

import img1 from "../../assets/svg/1.svg"
import img2 from "../../assets/svg/2.svg"
import img3 from "../../assets/svg/3.svg"
import img4 from "../../assets/svg/4.svg"
import img5 from "../../assets/svg/5.svg"
import img6 from "../../assets/svg/6.svg"
import img21 from "../../assets/svg/2.1.svg"
import img22 from "../../assets/svg/2.2.svg"
import img23 from "../../assets/svg/2.3.svg"
import img7 from "../../assets/svg/7.svg"

const UserMenu = () => {
  return (
    <>
      <Stack height={"100vh"} width={"320px"} bgcolor={"white"}>

        <Stack sx={{mt:2}}>

        <Logo/>
        </Stack>

<Stack alignItems='flex-start' sx={{mt:6,ml:2,mr:3,width:"100%",height:"100vh"}} >
    <SimpleSidebarItem title='Overview' srcs={img1} link='/user/dashboard'/>
    <SimpleSidebarItem title='MyQuote' srcs={img2} link='/user/quote'/>
    <SimpleSidebarItem title='MyOrder' srcs={img3} link='/user/order'/>
    <SimpleSidebarItem title='Invoice' srcs={img4} link='/user/invoice'/>
    <SimpleSidebarItem title='My claims' srcs={img5} link='/user/claims'/>
    <SimpleSidebarItem title='Transaction History' srcs={img6} link='/user/history'/>
    <SimpleSidebarItem title='Credit Wallet' srcs={img7} link='/user/wallet'/>
    <SimpleSidebarItem title='Adress Book' srcs={img21} link='/user/book'/>



    
</Stack>
        </Stack>
      
 
    </>
  )
}

export default UserMenu