import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Heading from "../atoms/Heading";
import OrderCard from "../molecules/OrderCard";

function OrdersContainer() {
  //
  const orders = useSelector((state: RootState) => state.orders.value);

  return (
    <div className="w-full lg:w-3/4 flex flex-col p-8 space-y-8">
      {/* heading */}
      <Heading>Orders</Heading>
      {/* card grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* card */}
        {orders.map((order, index) => {
          return (
            <OrderCard
              id={order.id}
              name={order.name}
              food={order.food}
              key={order.id}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrdersContainer;
