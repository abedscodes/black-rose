import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//COD orders
const placeOrder = async (req, res) => {
    try {
        const {userId,items,amount,address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            status: 'Order Placed',
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success:true, message: 'Order Placed Successfully'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})
        
    }
}

//Stripe orders
const placeOrderStripe = async (req, res) => {

}

//Razorpay orders
const placeOrderRazorpay = async (req, res) => {

}

//All orders
const allOrders = async (req, res) => {

    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})        
    }

}

//All user orders
const userOrders = async (req, res) => {

    try {
        
        const {userId} = req.body;

        const orders = await orderModel.find({userId})

        res.json({success:true, orders})


    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})
        
    }

}

//Update order staturs
const updateStaus = async (req, res) => {
    try {
        const{orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message: 'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStaus }