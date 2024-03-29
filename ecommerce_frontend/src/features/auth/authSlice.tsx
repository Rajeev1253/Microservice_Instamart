import { createSlice,type PayloadAction  } from "@reduxjs/toolkit";
import { loginUser, registerUser  } from "./authAction";

export interface Auth {
  _id?: string
  name?: string
  email?: string
  password?: string
  
  createdDate?: Date
}

type initialData = {
  loading: Boolean,
  error: any | undefined,
  users: Auth[]
  userToken: String | null
}


const initalState : initialData = {
  loading: false,
  userToken: null,
  error: null,
  users:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action, "gerh4")
      state.loading = false;
   
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action, "error")
      state.loading = false;
      console.log("slice", action)
      // state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("from user slice", action.payload.data)

      state.loading = false;
      if(action.payload){
        state.users = action.payload.data;
      }
      state.userToken = action.payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      // state.error = action.error.message;
    });
    // builder.addCase(userDetails.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(userDetails.fulfilled, (state, action) => {
    //   state.loading = false;
    //
    //   state.userInfo = action.payload.data.user;
    //   console.log(state.userInfo);
    // });
    // builder.addCase(userDetails.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });

    // // fetchUsers
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true;
    // })
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null
    //   console.log("fetch users",action.payload.user);
    //   state.users = action.payload.user;
    // })
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   state.loading = false
    //   state.error = action.error.message
    // })
  },
});


export default authSlice.reducer;