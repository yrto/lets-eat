import React from "react";
import OrdersContainer from "./organisms/OrdersContainer";
import ReservationsContainer from "./organisms/ReservationsContainer";

function App() {
  return (
    <div className="container flex m-auto p-16">
      {/* reservations */}
      <ReservationsContainer />
      {/* orders */}
      <OrdersContainer />
    </div>
  );
}

export default App;
