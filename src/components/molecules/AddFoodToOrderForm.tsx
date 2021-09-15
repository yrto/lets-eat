import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToOrder } from "../../features/orderSlice";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface FormProps {
  id: string;
}

function AddFoodToOrderForm({ id }: FormProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddFoodToOrder();
  };

  return (
    <div className="flex space-x-2 text-sm">
      <Input
        wide={false}
        placeholder="Food..."
        value={orderFoodInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button buttonStyle="secondary" onClick={handleAddFoodToOrder}>
        Add
      </Button>
    </div>
  );
}

export default AddFoodToOrderForm;
