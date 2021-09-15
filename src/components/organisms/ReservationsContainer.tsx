import React from "react";
import Heading from "../atoms/Heading";
import AddReservationForm from "../molecules/AddReservationForm";
import ReservationList from "./ReservationList";

function ReservationsContainer() {
  return (
    <div className="w-1/4 border-r p-8 space-y-8">
      {/* heading */}
      <Heading>Reservations</Heading>
      {/* form */}
      <AddReservationForm />
      {/* reservation list */}
      <ReservationList />
    </div>
  );
}

export default ReservationsContainer;
