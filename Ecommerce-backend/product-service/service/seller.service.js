import { userModel } from "../models/userModel.js";

export const createUser = async(message) => {
  try {
    const name = message.name
    const email = message.email
    const role = message.role

    console.log("daaata",)


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

    if (!role) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "role is required",
      });
    }
    const existingUser = await userModel.findOne({ email:message.email });

    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Already exists",
      });
    }


    const user = await userModel.create({
      SellerName:message.name,
      email:message.email,
      role:message.role,
    });

    return user;
  } catch (error) {
    console.log(error)
  }
};
export const getAllUser = async (req) => {
  try {
    let page = req.body.page ?? 1;
    let limit = 2;
    const user = await userModel.find().skip(page * limit - limit).limit(limit);
    console.log(user)
    return user;
  } catch (error) {
    throw error;
  }
};
export const getUser = async (req) => {
  const {id} = req.params;
  console.log(id)
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (req) => {
  const {id} = req.params;

  try {
    const update = { status:"inactive" };
    const user = await userModel.findOneAndUpdate({_id:id},update);
    const status =  "inactive";
    const signature = process.env.RABBIT_USER_DELETED_SIGNATURE
    const routingKey = "hello3"
    const message ={
      email,
      status
    }
    await producer.publishMessage(routingKey,message,signature);
    console.log("user deleted from user db and published data to auth",message)
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const SellerService = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
};
