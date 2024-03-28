import React from "react";
import TypographyComponent from "../../../components/Typography";
import { Avatar, Box, Divider, Paper, Stack } from "@mui/material";
import ButtonComponent from "../../../components/ButtonComponent";
import SimpleSidebarItem from "../../../components/SimpleSidebarItem";
import InputComponent from "../../../components/InputComponent";
import img1 from "../../../assets/svg/info.svg";
import img2 from "../../../assets/svg/info.svg";

import img3 from "../../../assets/svg/percent.svg";
import img4 from "../../../assets/svg/docs.svg";
import img5 from "../../../assets/svg/puse.svg";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <Stack sx={{ m: 3 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack>
            <TypographyComponent size="28px" weight="600" text="Settings" />
            <TypographyComponent
              size="14px"
              weight="400"
              text="Manage your account settings"
              sx={{ pt: 1 }}
            />
          </Stack>
          <Stack direction={"row"} gap={3}>
            <ButtonComponent
              variant="contained"
              text="Save Changes"
              sx={{ textTransform: "none", width: "140px", height: "48px" }}
            />
            <ButtonComponent
              variant="outlined"
              text="Cancel"
              sx={{ textTransform: "none", width: "140px", height: "48px" }}
            />
          </Stack>
        </Stack>
        <Stack sx={{ mt: 2 }}>
          <Paper sx={{ width: "75vw", height: "70vh" }}>
            <Stack direction={"row"} sx={{ m: 5 }}>
              <Stack width={"30%"} height={"100%"} gap={4} direction={"row"}>
                <Stack width={"60%"}>
                  <SimpleSidebarItem
                    title="Persnol Information"
                    srcs={img1}
                    link="persnol"
                  />
                  <SimpleSidebarItem
                    title="Security"
                    srcs={img2}
                    link="security"
                  />
                  <SimpleSidebarItem
                    title="Billing & Tax"
                    srcs={img3}
                    link="tax"
                  />
                  <SimpleSidebarItem title="Plans" srcs={img4} link="plans" />
                  <SimpleSidebarItem
                    title="Linked Shops"
                    srcs={img5}
                    link="shops"
                  />
                </Stack>
                <Stack height={"100%"}>
                </Stack>
                </Stack>

                {/* <Box sx={{p:2,border: 1, bgcolor: '"red"'}} >
sdfsdfsdf
</Box> */}
<Divider  orientation="vertical" sx={{border:"1px solid",height:"600px"}} />
             
            </Stack>
          </Paper>
        </Stack>
      </Stack>
      <Outlet/>
    </div>
  );
};

export default Settings;
