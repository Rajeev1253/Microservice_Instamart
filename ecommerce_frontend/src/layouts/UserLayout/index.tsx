import { Stack } from '@mui/material'
import React from 'react'
import SidebarMenu from '../SidebarLayout/Sidebar/SidebarMenu'
import { Outlet } from 'react-router-dom'
import Headers from '../SidebarLayout/Header'
import UserMenu from './UserMenu'
import UserHeader from './UserHeader'

const UserLayout = () => {
  return (
    <div className="adminContainer">
    <Stack direction={"row"}>
<aside> 
   <UserMenu/>
</aside>
<Stack sx={{width:"100%",height:"100%"}}>
   <UserHeader/>
   <Outlet/>       
</Stack>
</Stack>
   
</div>
  )
}

export default UserLayout