import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        // Sort newest orders first
        const sortedOrders = response.data.orders.sort((a, b) => b.date - a.date);
        setOrders(sortedOrders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 px-20 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center mt-8">No orders found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong>{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Payment:</strong> {order.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong>{" "}
                  <span className="text-green-600 font-medium">
                    {order.status}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border-t pt-3 first:border-t-0 first:pt-0"
                  >
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {item.name.length > 50
                          ? item.name.slice(0, 50) + "..."
                          : item.name}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-700 mt-1">
                        <p>
                          {currency}
                          {item.price}
                        </p>
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t pt-3 flex justify-between text-sm text-gray-700">
                <p>
                  <strong>Total:</strong> {currency}
                  {order.amount}
                </p>
                <p>
                  <strong>Address:</strong> {order.address.street},{" "}
                  {order.address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
