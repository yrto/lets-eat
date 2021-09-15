import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToOrder } from "../../features/orderSlice";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface OrderCardType {
  id: string;
  name: string;
  food: string[];
}

function OrderCard({ id, name, food }: OrderCardType) {
  //
  const [orderFoodInput, setOrderFoodInput] = useState("");

  const dispatch = useDispatch();

  const handleAddFoodToOrder = () => {
    if (!orderFoodInput) return;
    dispatch(addFoodToOrder({ id, food: orderFoodInput }));
    setOrderFoodInput("");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setOrderFoodInput(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 rounded shadow bg-white">
      <p className="text-xl">{name}</p>
      <div className="flex space-x-2 text-sm">
        <Input
          wide={false}
          placeholder="Food..."
          value={orderFoodInput}
          onChange={handleInputChange}
        />
        <Button buttonStyle="secondary" onClick={handleAddFoodToOrder}>
          Add
        </Button>
      </div>
      <ul className="border-t text-gray-600">
        {food.map((food) => {
          return <li className="list-inside list-disc border-b p-2">{food}</li>;
        })}
      </ul>
    </div>
  );
}

export default OrderCard;
