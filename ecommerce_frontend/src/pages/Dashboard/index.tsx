import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='adminContainer'>
        
        <Outlet/>
    </div>
  )
}
export default Dashboard