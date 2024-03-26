import { productModel } from "../models/productModel.js";


export const createProduct = async(req) => {
  try {
    const {title,description,price,quantity,category,userid}= req.body;
    if (!title) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "title is required",
      });
    }
    if (!description) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "description is required",
      });
    }
    if (!price) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "price is required",
      });
    }
    if (!quantity) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "quantity is required",
      });
    }
    if (!category) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "category is required",
      });
    }
    if (!userid) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "userId is required",
      });
    }
    const product = await productModel.create({
      title:title,
      description:description,
      price:price,
      quantity:quantity,
      category:category,
      user:userid
    });
    return product
  } catch (error) {
    console.log(error)
  }
};
export const getAllProducts= async (req) => {
  try {
    let page = req.body.page ?? 1;
    let limit = 2;
    const product = await productModel.find().skip(page * limit - limit).limit(limit);
    console.log(user)
    return product;
  } catch (error) {
    throw error;
  }
};
export const getProduct= async (req) => {
  const {id} = req.params;
  console.log(id)
  try {
    const product = await productModel.findById(id);
    return product;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async(req)=>{
  try{
    const filter = {_id:req.id};
    const update = {}
    const product = await productModel.findOneAndUpdate(filter,update);
    return product
  }
  catch(error){
    console.log(error)
  }

}


export const deleteProduct = async (req) => {
  const {id} = req.params;
  try {
    const product = await productModel.findOneAndUpdate({_id:id},update);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const productService = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
