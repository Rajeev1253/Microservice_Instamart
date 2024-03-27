import { Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./UsersLayout.module.css";
import Logo from "../../components/Logo";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TypographyComponent from "../../components/Typography";
import ButtonComponent from "../../components/ButtonComponent";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from "react-router-dom";
const UsersLayout = () => {
  return (
    <div>
      <Paper>
      
          <Stack
            className={style.mainStack}
            direction={"row"}
            height={"80px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"15px"}  >

            <Stack
              height={"80px"}
              width={"50px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <MenuIcon className={style.menuIcon} />
            </Stack>
            <Stack className={style.logo}>
              <Logo />
            </Stack>
            </Stack>
            <Stack direction={"row"} sx={{width:"100%",marginLeft:"69px",marginRight:"50px"}} alignItems={"center"} gap={"20px"}  >
              <Stack
                className={style.search}
                direction={"row"}
               
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <TextField
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Search Product,stores,and recipes"
                  sx={{
                    input: {
                      color: "black",
                      "&::placeholder": {
                        // <----- Add this.
                        opacity: 1,
                        fontWeight: "400",
                      },
                    },
                  }}
                ></TextField>
                <SearchIcon sx={{ mr: 3 }} />
              </Stack>
            <Stack direction={"row"} className={style.navloc}>
                <LocationOnIcon/>
                <TypographyComponent text="94105"/>
            </Stack>
            </Stack>
            <Stack direction={"row"} gap={"25px"} sx={{mr:2}}>
                <Button variant="text" className={style.Login} sx={{bgcolor:"#0AAD0A",borderRadius:"24px",color:"white"}}>Log in</Button>
            <Stack > 
                <Button variant="text" sx={{bgcolor:"#F6F7F8",width:"82px",height:"48px",borderRadius:"48px"}}>
                    <ShoppingCartIcon sx={{color:"black"}}/>
                    <TypographyComponent text="0" weight="600" sx={{color:"black",ml:1}}/>

                </Button>
            </Stack>    
            </Stack>
          </Stack>
                  
      </Paper>
      <Outlet/>
    </div>
  );
};

export default UsersLayout;
