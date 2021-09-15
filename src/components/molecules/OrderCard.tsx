import React from "react";
import AddFoodToOrderForm from "./AddFoodToOrderForm";

interface OrderCardProps {
  id: string;
  name: string;
  food: string[];
}

function OrderCard({ id, name, food }: OrderCardProps) {
  return (
    <div className="flex flex-col space-y-4 p-4 rounded shadow bg-white">
      <p className="text-xl">{name}</p>
      <AddFoodToOrderForm id={id} />
      <ul className="border-t text-gray-600">
        {food.map((food) => {
          return <li className="list-inside list-disc border-b p-2">{food}</li>;
        })}
      </ul>
    </div>
  );
}

export default OrderCard;
