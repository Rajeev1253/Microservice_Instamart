import { comparePassword, hashPassword } from "../helper/auth.helper.js";
import { userModel } from "../models/userModel.js";
import JWT from "jsonwebtoken"
import Producer from "../workers/producer.js";
const producer = new Producer();

 const register = async(req) => {
    try {
      const {name, email, password,role} = req?.body;

      console.log('name, email, password: ', name, email, password);
      if (!name) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "name is required",
        });
      }
      if (!email) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "email is required",
        });
      }
  
      if (!password) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "password is required",
        });
      }
      
      if (!role) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "role is required",
        });
      }

      const existingUser = await userModel.findOne({ email:email });
  
      if (existingUser) {
        throw Object.assign(new Error(), {
          name: "CONFLICT",
          message: "User Already exists",
        });
      }
      const hashed_password = await hashPassword(password);
  
      const user = await userModel.create({
        name,
        email,
        password: hashed_password,
        role
      });

      const signature = process.env.RABBIT_AUTH_REGISTER_SIGNATURE
      const routingKey = "hello"
      const message ={
        name,email,role
      }
      await producer.publishMessage(routingKey,message,signature);
      console.log("auth published",message)
      return user;
    } catch (error) {
      console.log(error)
    }
  };
  const login = async (payload) => {
    try {
      const { email, password } = payload.body;
      console.log(email, password);
      if (!email || !password) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Email or Password is missing",
        });
      }
  
      const user = await userModel.findOne({ email });
      // console.log(user);
      if (!user) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: `Email is not registered`,
        });
      }
  
      const match = await comparePassword(password, user.password);
  
      if (!match) {
        throw Object.assign(new Error(), {
          name: "UNAUTHORIZED",
          message: `Password is not correct`,
        });
      }
  
      const token = JWT.sign({ _id: user._id },process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      
      return { user, token };
    } catch (error) {
      throw error;
    }
  };

  export const update =async(req)=>{
    try{
      const update =  {isRegistered:`${req.status}`}


      const user = await userModel.findOneAndUpdate({email:req.email},update)
     return user
    }
    catch(error){
      throw error

    }
  }

  export const authService = {
    register,
    login,
    update
  };
  