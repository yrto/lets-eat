import React from "react";
import { useDispatch } from "react-redux";
import { removeOrder } from "../../features/orderSlice";
import AddFoodToOrderForm from "./AddFoodToOrderForm";

interface OrderCardProps {
  id: string;
  name: string;
  food: string[];
  index: number;
}

function OrderCard({ id, index, name, food }: OrderCardProps) {
  const dispatch = useDispatch();
  return (
    <div
      className="flex-col space-y-4 p-4 rounded shadow bg-white"
      data-testid="order-card"
    >
      <div className="flex justify-between items-center">
        <p className="text-xl">{name}</p>
        <button
          className="px-2 rounded shadow font-bold text-white bg-red-600"
          onClick={() => {
            dispatch(removeOrder(index));
          }}
          data-testid="remove-order-button"
        >
          x
        </button>
      </div>
      <AddFoodToOrderForm id={id} />
      {food.length > 0 && (
        <ul className="border-t">
          {food.map((food) => {
            return (
              <li className="list-inside list-disc border-b p-2">{food}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default OrderCard;
