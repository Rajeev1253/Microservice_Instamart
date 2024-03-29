import signin from "../assets/Images/signin.png"
import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import TypographyComponent from '../components/Typography'
import Checkbox from '@mui/material/Checkbox';
  import React, { useState } from "react";
//   import CustomButton from "../../components/Button/CustomButton";
  import LoginImg from "../../../asserts/images/Login.png" 
import { useAppDispatch } from "../app/hooks";
import { loginUser } from "../features/auth/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [role, setRole] = React.useState("");

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const data = {
      email:email,
      password:password,

    }
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

    const handleSubmit = async (e :React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("frontend", email, password);
      dispatch(loginUser(data ))
          .unwrap()
          .then((res) => {
              if (res.status == 200) {
                  console.log(res.data.user._id)
                  localStorage.setItem("auth", JSON.stringify(res.data));
                  // navigate(location.state || "/");
                  navigate('/users/dashboard');
              }
              console.log(res);
          });
        };




  return (
    <div>
        <Stack justifyContent={"center"} alignItems={"center"} height={"85vh"} >
        <Paper elevation={1} sx={{width:"50%",height:"470px"}}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>

          <Stack  width={"100%"}>
          <img src={signin} style={{width:"100%",height:"450px",marginTop:"20px",marginLeft:"20px"}}></img>
          </Stack>
          <Stack sx={{ml:4,mr:4}} width={"100%"} justifyContent={"center"} >
            <TypographyComponent text='Sign In' weight='600' size='25px'/>
            <Stack gap={"20px"} >
            <Stack width={"100%"} sx={{mt:2}}>
            <TypographyComponent text='Your email' weight='500' size='12px'/>
            <Paper elevation={1} sx={{bgcolor:"#EFEFEF78",borderRadius:"20px"}}>
            <TextField  variant='standard'  placeholder='name@example.com' value={email} onChange={(e)=>handleEmail(e)} InputProps={{disableUnderline:true}} sx={{p:1,width:"100%"}}/>
            </Paper>
            </Stack>
            <Stack>
            <TypographyComponent text='Password' weight='500' size='12px'/>
            <Paper sx={{bgcolor:"#EFEFEF78",borderRadius:"20px"}}>
            <TextField variant='standard'  type='password' onChange={(e)=>handlePassword(e)} InputProps={{disableUnderline:true}} sx={{p:1}}/>
            </Paper>
            </Stack>
            
            <Stack direction={"row"}>
              <Checkbox  sx={{width:"20px",height:"20px"}} />
              <TypographyComponent text='Remember me' sx={{ml:1}} size='12px'/>
            </Stack>
            <Stack>
              <Button variant='contained' onClick={(e) => {
                      handleSubmit(e);
                    }} sx={{textTransform:"NONE",borderRadius:"12px"}}>Sign In</Button>
            </Stack>
            </Stack>

          </Stack>
          </Stack>

        </Paper>

      </Stack>
    </div>
  )
}

export default Login