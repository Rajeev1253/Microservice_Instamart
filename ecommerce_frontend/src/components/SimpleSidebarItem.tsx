import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { on } from 'events';
import React from 'react'
import ImageComponent from './Image';
import { NavLink } from 'react-router-dom';
interface SimpleSidebarItemProps {
    title:string;
    srcs: any;
    link :string;
    onClick?:()=> void;
}
const SimpleSidebarItem = (props:SimpleSidebarItemProps) => {
  return (
    <NavLink to={props.link} style={{textDecoration:"none", fontStyle:"normal"}}>
      <ListItem sx={{width:"260px"}}>
            <ImageComponent srcs={props.srcs}/>
            <ListItemText primary={props.title} sx={{ml:2}}/>
        </ListItem>

    </NavLink>
        
  )
}

export default SimpleSidebarItem;