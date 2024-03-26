import { authService } from "../services/auth.service.js";
export const updateUser = async (msg) => {
  const {email}= msg
    console.log("messagefbgfdhhhhhhhhhhhhhhhhhhhh  ",email)
    try {
      const response = await authService.update(email);
    }
    catch(error){
      console.log(error)
    }
  };
  export const deleteUser = async (msg) => {
    const {email,status}= msg
      console.log("deleteeeeeeeeeeeeeedddddddddd",email,status)
      try {
        const response = await authService.update(email);
      }
      catch(error){
        console.log(error)
      }
    };
  

  const authProcessor ={
    updateUser,
    deleteUser
  }
  export default authProcessor;    