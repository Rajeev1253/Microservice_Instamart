import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='adminContainer'>
        <Breadcrumbs separator=">" >
        <Link to={"/ticket/addProduct"} >AddProduct</Link>
        <Link to={"/ticket/viewProduct"}>ViewProduct</Link>
        <Link to={"/ticket/updateProduct"}>UpdateProduct</Link>
        </Breadcrumbs>
    </div>
  )
}

export default Dashboard