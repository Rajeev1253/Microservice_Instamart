import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='adminContainer'>
        <Breadcrumbs separator=">" sx={{bgcolor:"red", width:"500px"}}>
        <Link to={"/admin/addProduct"} >AddProduct</Link>
        <Link to={"/admin/viewProduct"}>ViewProduct</Link>
        <Link to={"/admin/updateProduct"}>UpdateProduct</Link>
        </Breadcrumbs>
    </div>
  )
}
export default Dashboard