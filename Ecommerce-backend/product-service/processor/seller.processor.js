import { SellerService } from "../service/seller.service.js";

export const registerUser = async (message) => {
    // const {userDetails = {}} = payload
    console.log("message",message)
    try {
      const response = await SellerService.createUser(message)
      if (!response) {
        throw new Error('User could not be created.');
      } 
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const userProcessor ={
    registerUser
  }
  export default userProcessor;    