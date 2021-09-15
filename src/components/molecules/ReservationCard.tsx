import React from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addOrder } from "../../features/orderSlice";
import { removeReservation } from "../../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <button
      className="p-4 rounded shadow font-bold"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addOrder({
            id: nanoid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </button>
  );
}

export default ReservationCard;
