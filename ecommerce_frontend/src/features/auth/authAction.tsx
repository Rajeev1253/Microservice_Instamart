import { createAsyncThunk } from "@reduxjs/toolkit";
import {type Auth} from "./authSlice"
import axios from "axios";
import { ACTION_TYPE } from "./authType";
import { userSignin, userSignup } from "../../service/auth.service";

export const registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async (data: Auth , { rejectWithValue }) => {
    try {
      
      console.log("😁😁",data)
      const res = await userSignup(data)

      // const res = await userRegister({email,password},config)
      console.log(res)
      return res
    } 
    catch (error:any) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  ACTION_TYPE.SIGN_IN,
  async (data: Auth, { rejectWithValue }) => {
    try {
      console.log("action",);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await userSignin(data)
      console.log(res,"ressssss")
      return res;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// export const userDetails = createAsyncThunk(
//   ACTION_TYPE.USER_DETAILS,
//   async ({input,userId}, { rejectWithValue }) => {
//     try {
//       console.log("action", input,userId);
     
//       const res = await axios.post(`http://localhost:8080/users/${userId}`, input)      
//     return res;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const fetchUsers = createAsyncThunk(
//   ACTION_TYPE.GET_USER,
//   async({existingUser,token},{rejectWithValue})=>{
//       console.log(token)
//       console.log(existingUser)
//       const res = await axios.get(`http://localhost:8080/users/${existingUser}`,
//       {headers:{Authorization: token}}
//       );
//       console.log(res);
//       const data = await res.data;
//       return data;
//   }
// )