import React, { useState } from "react";
import Header from "../../../components/Header";
import PrintIcon from "@mui/icons-material/Print";
import master from "../../../assets/svg/mastercard.svg";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import TypographyComponent from "../../../components/Typography";
import ButtonComponent from "../../../components/ButtonComponent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OrderCard from "../../../components/orderCard";
import ImageComponent from "../../../components/Image";

const OrderDetails = () => {
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <Header text1="Order Details" text2="Home>Order List>Order Details" />
      <Stack sx={{ m:4 }}>
        <Stack >
          <Paper sx={{ width:"100%", height: "560px" }}>
            <Stack sx={{ m: 2 }}>
              <Stack direction={"row"} alignItems={"center"}>
                <TypographyComponent
                  text="Order ID: "
                  weight="600"
                  size="16px"
                />
                <TypographyComponent
                  text=" #6743"
                  weight="600"
                  size="16px"
                  sx={{ ml: 1 }}
                />
                <ButtonComponent
                  text="Pending"
                  variant="contained"
                  sx={{
                    width: "71px",
                    height: "32px",
                    ml: 2,
                    textTransform: "none",
                    bgcolor: "#FFA52FCC",
                    color: "black",
                  }}
                />
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ mt: 2 }}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} >
                  <CalendarMonthIcon sx={{ mr: 2 }} />
                  <TypographyComponent text="Feb16,2022-feb20,2022" />
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <FormControl sx={{ width: "219px", height: "52px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Change status
                    </InputLabel>
                    <Select
                      variant="filled"
                      sx={{ bgcolor: "#EFEFEF78", border: "1px solid" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                     
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Pending</MenuItem>
                      <MenuItem value={20}>Dispatch</MenuItem>
                      <MenuItem value={30}>Delivered</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    sx={{
                      bgcolor: "FFA52FCC",
                      color: "gray",
                      width: "24px",
                      height: "24px",
                      p: 3,
                      border: "1px solid ",
                      m: 2,
                    }}
                  >
                    <PrintIcon />
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "FFA52FCC",
                      color: "gray",
                      width: "24px",
                      height: "24px",
                      p: 3,
                      border: "1px solid ",
                      m: 2,
                      textTransform: "none",
                    }}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
              <Stack sx={{ height: "194px",width:"100%",mt:2 }} direction={"row"} gap={1.5} justifyContent={"space-evenly"}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
              </Stack>
              <Stack direction={"row"} gap={1.5} sx={{mt:4,ml:8}} justifyContent={"space-evenly"}>
                <Stack>
                <Card sx={{ width: "400px", height: "154px" }}>
                  <TypographyComponent
                    text="Payment Info"
                    weight="600"
                    sx={{ m: 1 }}
                    size="20px"
                  />
                  <Stack direction={"row"} sx={{ ml: 1 }}>
                    <ImageComponent srcs={master} />
                    <TypographyComponent text="Master Card **** **** 6557" />
                  </Stack>
                  <Stack direction={"row"} sx={{ ml: 2 }}>
                    <TypographyComponent text="Business Name:" size="14px" />
                    <TypographyComponent text="User" size="14px" />
                  </Stack>
                  <Stack direction={"row"} sx={{ ml: 2 }}>
                    <TypographyComponent text="Phone:" size="14px" />
                    <TypographyComponent text=" +91 904 231 1212" size="14px" />
                  </Stack>
                </Card>
                </Stack>
                <Stack>
                    <Card sx={{ width: "700px", height: "154px" }}>
                        <CardContent>
                            <TypographyComponent text="Note" weight="600" size="20px" sx={{mb:1.5}}/>
                            

                        </CardContent>

                    </Card>
                </Stack>

              </Stack>
             </Stack>
            
          </Paper>
        </Stack>
        <Stack>
          <Stack sx={{ mt: 3 }}>
            <Paper sx={{ width: "100%", height: "430px" }}></Paper>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderDetails;
