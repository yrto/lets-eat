import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Heading from "../atoms/Heading";
import ReservationCard from "../molecules/ReservationCard";
import AddReservationForm from "../molecules/AddReservationForm";

function ReservationsContainer() {
  //
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  return (
    <div className="w-1/4 border-r p-8 space-y-8 text-center">
      {/* heading */}
      <Heading>📆 Reservations</Heading>
      {/* form */}
      <AddReservationForm />
      {/* reservations */}
      {reservations.length > 0 && (
        <>
          <h3 className="text-lg"> Waiting</h3>
          <div className="flex flex-col space-y-4 bg-white">
            {reservations.map((name, index) => (
              <ReservationCard name={name} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ReservationsContainer;
