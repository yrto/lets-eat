import React from "react";

interface ReservationCardTypes {
  name: string;
}

function ReservationCard({ name }: ReservationCardTypes) {
  return <button className="p-4 rounded shadow font-bold">{name}</button>;
}

export default ReservationCard;
