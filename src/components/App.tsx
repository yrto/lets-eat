import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addReservation } from "../features/reservationsSlice";
import ReservationCard from "./ReservationCard";

function App() {
  //
  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  return (
    <div className="container flex m-auto p-16">
      {/* reservations container */}
      <div className="w-1/4 border-r p-8 space-y-8 text-center">
        <h2 className="text-2xl font-bold">📆 Reservations</h2>
        {/* form */}
        <div className="flex flex-col space-y-2">
          <input
            className="rounded border min-w-full p-2 shadow-inner text-center"
            placeholder="Client's name..."
            value={reservationNameInput}
            onChange={(e) => setReservationNameInput(e.target.value)}
          />
          <button
            className="rounded min-w-full p-2 shadow bg-blue-600 text-white active:bg-blue-700 font-bold"
            onClick={handleAddReservation}
          >
            Add
          </button>
        </div>
        {/* reservarion list */}
        <h3 className="text-lg"> Waiting</h3>
        <div className="flex flex-col space-y-4 bg-white">
          {reservations.map((name) => (
            <ReservationCard name={name} />
          ))}
        </div>
      </div>
      {/* customer food container */}
      <div className="w-3/4 flex flex-col p-8 space-y-8">
        <h2 className="text-2xl font-bold">📝 Orders</h2>
        {/* card grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* card */}
          <div className="flex flex-col space-y-4 p-4 rounded shadow bg-white">
            <p className="text-xl text-center">Selena Gomez</p>
            <ul className="border-t text-gray-600">
              <li className="list-inside list-disc border-b p-2">empty</li>
            </ul>
            <div className="flex space-x-2 text-sm">
              <input
                className="rounded border w-3/4 p-2 shadow-inner"
                placeholder="Food..."
              />
              <button className="rounded border w-1/4 p-2 font-bold  active:bg-gray-100 ">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
