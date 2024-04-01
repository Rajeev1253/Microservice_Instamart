import { createSlice,type PayloadAction  } from "@reduxjs/toolkit";
import { getAllProduct,  registerProduct  } from "./productAction";
// import { getProduct } from './../../service/auth.service';

export interface product {
  _id?: string
  productName?: string
  description?: string
  category?: string
  brand?: string
  regularPrice?: string
  salePrice?: string
  sku?: string
  quantity?: string
  tag?: string
}

type initialData = {
  loading: Boolean,
  error: any | undefined,
  products: product[]
}


const initalState : initialData = {
  loading: false,
  error: null,
  products:[]
};

const productSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    addNewUser: (state, action: PayloadAction<product>) => {
      state.products.push(action.payload)
    }
  },
  extraReducers: (builder) => {

    builder.addCase(registerProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerProduct.fulfilled, (state, action) => {
      console.log(action, "gerh4")
      console.log(action.payload, "gerh4")
      const data : any | undefined = action.payload
      console.log('useSlice data',data)
      // if (data !== undefined) {
      //         state.products.push(data?.)
      //       }
      state.loading = false;
   
    });
    builder.addCase(registerProduct.rejected, (state, action) => {
      console.log(action, "error")
      state.loading = false;
      console.log("slice", action)
      // state.error = action.payload;
    });
  //   builder.addCase(getAllProduct.pending,(state)=>{
  //     state.loading=true;
  // })
  // builder.addCase(getAllProduct.fulfilled,(state,action)=>{
  //     state.loading=false;
  //     state.error=null
  //     // console.log(action.payload)
  //     // console.log( state.contents)
  //     // const prevPosts = current(state.contents);
  //     // console.log('prevPosts',prevPosts);
  //     // // const prevPosts =state.contents
  //     // const newPosts = action.payload.posts
  //     // console.log(newPosts,[...prevPosts,...newPosts]);
  //     // state.product= action.payload;
  //     // state.contents.push(...action.payload?.posts)
  //     // console.log(state.contents)
  // })
  // builder.addCase(getAllProduct.rejected,(state,action)=>{
  //     state.loading=false
  //     state.error= action.error.message
  // })
    
  },
});


export default productSlice.reducer;