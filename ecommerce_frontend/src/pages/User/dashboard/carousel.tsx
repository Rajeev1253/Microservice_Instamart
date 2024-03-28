import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Stack } from '@mui/material'
import Frame1 from "../../../assets/svg/Frame.svg"
import CategoryCard from './categorycard'
function Example(props: any)
{
    var items = [
       
       <img src={Frame1} style={{width:"100%"}}></img>,
       <img src={Frame1} style={{width:"100%"}}></img>
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props:any)
{
    return (
      <div>
        
      <Stack>
        <Stack  width={"100%"} >    
        <Paper sx={{width:"100%"}}>
          <Stack bgcolor={"green"}>

           {props.item}
          </Stack>
          
        </Paper>
        </Stack>

      </Stack>
    
      </div>
    )
}
const Carousels = () => {
  return (
    <div>
      <Example/>
    </div>
  )
}

export default Carousels