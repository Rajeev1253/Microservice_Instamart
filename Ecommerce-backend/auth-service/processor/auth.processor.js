import { authService } from "../services/auth.service.js";
export const updateUser = async (msg) => { 
  console.log("dffdsbfdsbjdfsbdfhbs",msg)
  const {email,status}= msg
    console.log("messagefbgfdhhhhhhhhhhhhhhhhhhhh  ",email,status)
    try {
      const response = await authService.update(msg);
    }
    catch(error){
      console.log(error)
    }
  };
  export const deleteUser = async (msg) => {
    const {email,status}= msg
      console.log("deleteeeeeeeeeeeeeedddddddddd",email,status)
      try {
        const response = await authService.update(msg);
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