import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import signin from "../assets/Images/signup.png";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TypographyComponent from "../components/Typography";
import Checkbox from "@mui/material/Checkbox";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authAction";
import { useAppDispatch } from "../app/hooks";

const Signup = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRole = (
    e: SelectChangeEvent<string>
  ) => {
    setRole(e.target.value);
  };
  const handleName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };
  const handleEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };
  const handlePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  const data = {
    name: name,
    email: email,
    password: password,
    role: role,
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(registerUser(data))
      .unwrap()
      .then((res: any) => {
        console.log(res, "ghgrhtrh");
        console.log("hello");
        console.log(res.status);
        if (res.status === 200 || res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err: any) => {
        console.log(err, "reth");
        alert(err);
        console.log("error");
        console.log("err", err);
      });
  };

  return (
    <div>
      <Stack justifyContent={"center"} alignItems={"center"} height={"85vh"}>
        <Paper sx={{ width: "55%", height: "600px" }}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Stack width={"100%"}>
              <img
                src={signin}
                style={{
                  width: "100%",
                  height: "550px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              ></img>
            </Stack>
            <Stack sx={{ m: 3 }} width={"100%"}>
              <TypographyComponent
                text="Create your Free Account"
                weight="600"
                size="25px"
              />
              <Stack gap={"20px"} sx={{ m: 3 }}>
                <Stack>
                  <TypographyComponent text="Name" weight="500" size="12px" />
                  <Paper sx={{ bgcolor: "#EFEFEF78", borderRadius: "20px" }}>
                    <TextField
                      variant="standard"
                      value={name}
                      onChange={(e) => handleName(e)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ p: 1 }}
                    />
                  </Paper>
                </Stack>
                <Stack width={"100%"}>
                  <TypographyComponent
                    text="Your email"
                    weight="500"
                    size="12px"
                  />
                  <Paper sx={{ bgcolor: "#EFEFEF78", borderRadius: "20px" }}>
                    <TextField
                      variant="standard"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => handleEmail(e)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ p: 1, width: "100%" }}
                    />
                  </Paper>
                </Stack>
                <Stack>
                  <TypographyComponent
                    text="Password"
                    weight="500"
                    size="12px"
                  />
                  <Paper sx={{ bgcolor: "#EFEFEF78", borderRadius: "20px" }}>
                    <TextField
                      variant="standard"
                      type="password"
                      value={password}
                      onChange={(e) => handlePassword(e)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ p: 1 }}
                    />
                  </Paper>
                </Stack>

                <Stack>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="outlined"
                      size="small"
                      id="demo-simple-select-label"
                    >
                      Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={(e) => handleRole(e)}
                      sx={{ bgcolor: "#EFEFEF78", borderRadius: "20px" }}
                    >
                      <MenuItem value={"User"}>User</MenuItem>
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Stack direction={"row"}>
                  <Checkbox
                    defaultChecked
                    sx={{ width: "20px", height: "20px" }}
                  />
                  <TypographyComponent
                    text="I accept the Terms and Condition"
                    sx={{ ml: 1 }}
                    size="12px"
                  />
                </Stack>
                <Stack>
                  <Button
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    variant="contained"
                    sx={{ textTransform: "NONE", borderRadius: "12px" }}
                  >
                    Create Account
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default Signup;
