import { Outlet } from "react-router-dom"
import Logo from "../../../../components/Logo"
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import Buttons from "../../../../components/Button"
import Dashboard from "../../../../pages/Admin/dashboard"
import img1 from "../../../../assets/svg/1.svg"
import img2 from "../../../../assets/svg/2.svg"
import img3 from "../../../../assets/svg/3.svg"
import img4 from "../../../../assets/svg/4.svg"
import img5 from "../../../../assets/svg/5.svg"
import img6 from "../../../../assets/svg/6.svg"
import img21 from "../../../../assets/svg/2.1.svg"
import img22 from "../../../../assets/svg/2.2.svg"
import img23 from "../../../../assets/svg/2.3.svg"
import img7 from "../../../../assets/svg/7.svg"
import SimpleSidebarItem from "../../../../components/SimpleSidebarItem"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import React from "react"
import ImageComponent from "../../../../components/Image"


function SidebarMenu() {
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const handleClick2 = () => {
      setOpen2(!open2);
    };
    
    return(
        <>
        <Stack height={"100%"} bgcolor={"white"}>
          <Stack sx={{m:4}}>

        <Logo/>
          </Stack>

<Stack alignItems='flex-start' sx={{mt:6,ml:2,mr:3,width:"100%",height:"100vh"}} >

<ListItem onClick={handleClick2} sx={{mr:2}}>
        <ImageComponent srcs={img1}/>
        <ListItemText primary="Dashboard" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <Stack  width={"100%"}>
        <SimpleSidebarItem title="Add Product" srcs={img21} link="/admin/addProduct"/>
        <SimpleSidebarItem title="View Product" srcs={img22} link="/admin/viewProduct"/>
        </Stack>
        </Collapse>



    <ListItem onClick={handleClick} sx={{mr:2}}>
        <ImageComponent srcs={img2}/>
        <ListItemText primary="All Tickets" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack  width={"100%"}>
        <SimpleSidebarItem title="Open Tickets" srcs={img21} link="ticket/open"/>
        <SimpleSidebarItem title="Ticket With Orders" srcs={img22} link="/ticket/ticketorder"/>
        <SimpleSidebarItem title="Closed Tickets" srcs={img23} link="/ticket/closeticket"/>
        </Stack>
      </Collapse>
    <SimpleSidebarItem title="Orders" srcs={img5} link="/orders"/>
    <SimpleSidebarItem title="Customers" srcs={img4} link="/customers"/>
    <SimpleSidebarItem title="Settings" srcs={img7} link="/settings"/>
</Stack>
        </Stack>
      
 
        </>
    )
}
export default SidebarMenu