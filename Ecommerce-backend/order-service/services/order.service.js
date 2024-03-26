import { orderModel } from "../models/order.model";

export const createOrder = async (req) => {
    try {
        const {name,phoneNo,pincode,city,userId,products} = req.body;
        if (!name) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "name is required",
            });
        }
        if (!phoneNo) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "phoneNo is required",
            });
        }

        if (!pincode) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "pincode is required",
            });
        }
        if (!city) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "city is required",
            });
        }
        if (!userId) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "userId is required",
            });
        }
        if (!products) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "products is required",
            });
        }
      
        

        const order = await orderModel.create({
            name,
            phoneNo,
            pincode,
            city,
            userId,
            products       
        });
        return order;
    } catch (error) {
        console.log(error)
    }
};
export const getOrder = async (req) => {
    try {
        let page = req.body.page ?? 1;
        let limit = 5;
        const order = await orderModel.find().skip(page * limit - limit).limit(limit);
        console.log(order)
        return order;
    } catch (error) {
        throw error;
    }
};
export const updateOrder = async (req) => {
    try {
        const order = await orderModel.findOneAndUpdate();
        return order
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteOrder = async (req) => {
    const { id } = req.params;
    try {

        const item = await cartModel.findOneAndDelete({ _id: id })

        return item


    } catch (error) {
        console.log(error);
    }
};

export const orderService = {
    createOrder,
    updateOrder,
    getOrder,
    deleteOrder
};
