import React from 'react'
import ProductCard from '../../components/ProductCard'
import ProductHeader from '../vendor/productDetails/productHeader'
import { Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import ButtonComponent from '../../components/ButtonComponent'
import { Link } from 'react-router-dom'
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';
const viewProduct = () => {
  return (
    <div>
      <Stack sx={{m:3}}>
        <Stack direction={"row"} justifyContent={"space-between"}>

      <ProductHeader/>
        <ToggleButtonGroup size="large">
            <ToggleButton value={""}>
              <TableRowsIcon />
            </ToggleButton>
            <ToggleButton value={""}>
              <GridViewIcon />
            </ToggleButton>
          </ToggleButtonGroup>
      <Stack>
        <Link to={"/admin/addProduct"}><ButtonComponent text='Add Product' sx={{width:"212px",backgroundColor:"black",color:"white"}}/></Link>
      </Stack>
        </Stack>
        <Stack sx={{mt:4}} direction={"row"} flexWrap={"wrap"} gap={"20px"}>
          <ProductCard/>
          <ProductCard/>

          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

        </Stack>

      </Stack>
      </div>
  )
}

export default viewProduct