import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../../features/reservationSlice";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function AddReservationForm() {
  //
  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setReservationNameInput(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddReservation();
  };

  return (
    <div className="flex flex-col space-y-2">
      <Input
        wide={true}
        placeholder="Client's name..."
        value={reservationNameInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button buttonStyle="primary" onClick={handleAddReservation}>
        Add
      </Button>
    </div>
  );
}

export default AddReservationForm;
