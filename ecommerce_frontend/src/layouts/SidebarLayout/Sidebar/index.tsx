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
        <Stack direction={"column"} width={"100%"} sx={{m:0,p:0}}>

            <Headers/>
            <Outlet/>       
        </Stack>
        </Stack>
            
        </div>
      
       
       
    )
}
export default SidebarLayout