import { cartModel } from "../models/cart.model.js";

export const addToCart = async (req) => {
    try {
        const { userId, productId, quantity } = req.body;
        if (!userId) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "name is required",
            });
        }
        if (!productId) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "email is required",
            });
        }

        if (!quantity) {
            throw Object.assign(new Error(), {
                name: "BAD_REQUEST",
                message: "password is required",
            });
        }


        const cart = await cartModel.create({
            userId,
            products:productId  ,
            quantity,
        });
        return cart;
    } catch (error) {
        console.log(error)
    }
};
export const getCartItem = async (req) => {
    try {
        let page = req.body.page ?? 1;
        let limit = 5;
        const cart = await cartModel.find().skip(page * limit - limit).limit(limit);
        console.log(cart)
        return cart;
    } catch (error) {
        throw error;
    }
};
export const updateCartItem = async (req) => {
    try {
        const Cart = await cartModel.findOneAndUpdate();
        return Cart
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteItem = async (req) => {
    const { id } = req.params;
    try {

        const item = await cartModel.findOneAndDelete({ _id: id })

        return item


    } catch (error) {
        console.log(error);
    }
};

export const cartService = {
    addToCart,
    getCartItem,
    deleteItem,
    updateCartItem
};
