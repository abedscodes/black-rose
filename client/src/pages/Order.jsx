import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="mt-6 space-y-4">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left section: Image + Name */}
            <div className="flex items-start gap-4 md:gap-6 text-sm md:flex-1">
              <img className="w-16 sm:w-20 rounded" src={item.image[0]} alt={item.name} />
              <div className="flex flex-col gap-1">
                <p className="sm:text-base font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                <p className="text-gray-500 text-sm">
                  Price: {currency} {item.price}
                </p>
                <p className="text-gray-500 text-sm">
                  Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            {/* Right section: Status */}
            <div className="flex items-center gap-2 mt-3 md:mt-0 md:w-1/4">
              <span className="min-w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <p className="text-sm md:text-base font-medium">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
