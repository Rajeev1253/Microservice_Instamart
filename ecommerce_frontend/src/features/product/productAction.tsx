import { createAsyncThunk } from "@reduxjs/toolkit";
import {type product} from "./productSlice"
import axios from "axios";
import { ACTION_TYPE } from "./productType";
// import { userSignin, userSignup } from "../../service/auth.service";

export const registerProduct = createAsyncThunk(
ACTION_TYPE.ADD_PRODUCT,
  async (data: product , { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };  
      console.log(data)
      const res = await axios.post(`http://localhost:8082/products`,data,config)

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
export const getAllProduct = createAsyncThunk(
ACTION_TYPE.ADD_PRODUCT,
  async (data: product , { rejectWithValue }) => {
    try {
      
      console.log(data)
      const res = await axios.get(`http://localhost:8003/products`)

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