import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import Search from "../../../components/Search";
import calendar from "../../../assets/svg/Calendar.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Headers = () => {
    const currentDate = new Date().toUTCString().split(" ").slice(0,4).join(" ");
  return (
    
      <Stack
        height={"90px"}
        width={"100%"}
        sx={{ bgcolor: "white",m:0,p:0 }}
        justifyContent={"center"}
      >
        <Stack justifyContent="space-between" direction={"row"}>
          <Stack justifyContent={"flex-start"}>
            <Search />
          </Stack>
          <Stack
            width="100%"
            justifyContent={"center"}
            direction={"row"}
            alignItems={"center"}
            gap={"60px"}
          >
            <Stack
              width="470px"
              justifyContent={"center"}
              direction={"row"}
              alignItems={"center"}
            >
              <img
                src={calendar}
                style={{ width: "16px", height: "16px" }}
              ></img>
              <Typography fontWeight={600}sx={{ml:1}}>
                        {currentDate}
                    </Typography>
              <Typography fontWeight={600} sx={{ ml: 1 }}>
                {}
              </Typography>
              <NotificationsIcon sx={{ ml: 2 }} />
            </Stack>

            <Stack width={"300px"} direction={"row"}>
              <Stack sx={{ mr: 1 }}>
                <Typography fontSize={"15px"} fontWeight={"600"}>
                  Mark Collins
                </Typography>
                <Typography fontSize={"10px"} color={"gray"}>
                  {" "}
                  Business Man
                </Typography>
              </Stack>
              <Avatar />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    
  );
};

export default Headers;
