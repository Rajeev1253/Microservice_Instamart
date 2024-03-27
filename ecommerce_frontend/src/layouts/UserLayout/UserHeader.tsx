import { Search } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchComponent from '../../components/Search'
import NotificationsIcon from "@mui/icons-material/Notifications";

const UserHeader = () => {
  return (
    <Stack
    height={"90px"}

    sx={{ bgcolor: "white",m:0,p:0 }}
    justifyContent={"center"}
  >
    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"} sx={{mr:3}}>
        <Stack>
            <SearchComponent/>
        </Stack>
        <Stack>
        <NotificationsIcon sx={{ ml: 2 }} />
        </Stack>
        <Stack direction={"row"} sx={{ml:3,mr:3}}>
              <Stack direction={"row"} alignItems={"center"}>
              <Avatar />
                <Typography fontSize={"15px"} fontWeight={"600"} sx={{ml:2}}>
                  Mark Collins
                </Typography>
                
              </Stack>
            </Stack>
    </Stack>
  </Stack>

  )
}

export default UserHeader