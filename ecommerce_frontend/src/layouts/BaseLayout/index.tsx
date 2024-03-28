import React from 'react'
import Logo from '../../components/Logo'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <div className='baseContainer'>
        <Stack height={"60px"} sx={{pt:3,bgcolor:"white",pl:2}}>
        <Logo/> 
        </Stack>
        <Outlet/>
    </div>
  )
}

export default BaseLayout