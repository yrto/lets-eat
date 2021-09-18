import React from "react";
import Heading from "../atoms/Heading";
import AddReservationForm from "../molecules/AddReservationForm";
import ReservationList from "./ReservationList";

function ReservationsContainer() {
  return (
    <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r p-8 space-y-8">
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
