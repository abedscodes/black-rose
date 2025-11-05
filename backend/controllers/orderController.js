import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";


//COD orders
const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    let userId = null;

    // ✅ Extract userId from token if provided (for logged-in users)
    const { token } = req.headers;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (error) {
        console.log("Invalid token, proceeding as guest checkout");
      }
    }

    const orderData = {
      items,
      amount,
      address,
      status: "Order Placed",
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    if (userId) orderData.userId = userId;

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // ✅ Clear cart only for logged-in users
    if (userId) {
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
    }

    res.json({
      success: true,
      message: "Order Placed Successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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
    const { userId } = req.body;
    const orders = await orderModel.find({ userId }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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