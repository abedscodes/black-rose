import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("recentOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!order) return null;

    console.log("Order Items:", order.items);

  return (
    <div className="min-h-[85vh] bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Success Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <CheckCircle2 size={60} className="text-green-500 mb-3" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-1">
          Thank you for your order!
        </h1>
        <p className="text-gray-600 text-sm">
          A confirmation email has been sent to{" "}
          <span className="font-medium">{order.address.email}</span>.
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl border border-gray-100">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
            <p className="text-sm text-gray-500">
              Placed on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <p className="text-gray-700 text-sm">
            <span className="font-medium">Order ID:</span>{" "}
            {order._id?.slice(-6).toUpperCase()}
          </p>
        </div>

        {/* Product List */}
        <div className="divide-y divide-gray-100">
        {order.items.map((item, i) => {
            const matchedProduct = products.find((p) => p._id === item._id);
            const productImage =
            matchedProduct?.image?.[0] || "/placeholder.png";

            return (
            <div key={i} className="flex items-center gap-4 py-4">
                <img
                src={productImage}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="flex-1">
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
            );
        })}
        </div>


        {/* Total */}
        <div className="flex justify-between items-center border-t mt-4 pt-4 text-gray-800 font-medium">
          <span>Total</span>
          <span>${order.amount.toFixed(2)}</span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-8 w-full max-w-3xl border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Shipping Details</h2>
        <div className="grid sm:grid-cols-2 gap-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {order.address.firstName} {order.address.lastName}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {order.address.phone}
          </p>
          <p>
            <span className="font-medium">Email:</span> {order.address.email}
          </p>
          <p>
            <span className="font-medium">Payment:</span> {order.paymentMethod}
          </p>
          <p className="sm:col-span-2">
            <span className="font-medium">Address:</span>{" "}
            {order.address.street}, {order.address.city},{" "}
            {order.address.state}, {order.address.country},{" "}
            {order.address.zipcode}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 bg-black text-white px-8 py-3 rounded-md text-sm hover:bg-gray-800 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
