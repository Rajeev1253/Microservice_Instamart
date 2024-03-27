import { Outlet } from "react-router-dom"
import Logo from "../../../components/Logo"
import SidebarMenu from "./SidebarMenu"
import Headers from "../Header"
import { Stack } from "@mui/material"

function SidebarLayout() {
    return(
        <div className="adminContainer">
             <Stack direction={"row"}>
        <aside> 
            <SidebarMenu/> 
        </aside>
        <Stack sx={{width:"100%",height:"100%"}}>
            <Headers/>
            <Outlet/>       
        </Stack>
        </Stack>
            
        </div>
      
       
       
    )
}
export default SidebarLayout