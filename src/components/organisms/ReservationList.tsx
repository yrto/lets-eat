import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ReservationCard from "../molecules/ReservationCard";

function ReservationList() {
  //
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  return (
    <>
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
    </>
  );
}

export default ReservationList;
