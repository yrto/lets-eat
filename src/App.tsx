import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import LoginContainer from "./components/organisms/LoginContainer";
import OrdersContainer from "./components/organisms/OrdersContainer";
import ReservationsContainer from "./components/organisms/ReservationsContainer";
import Header from "./components/organisms/Header";

function App() {
  //
  const userData = useSelector((state: RootState) => state.login);

  return (
    <div className="container m-auto sm:p-8">
      {!userData.loggedIn ? (
        <LoginContainer />
      ) : (
        <>
          <Header />
          <div className="flex flex-col lg:flex-row">
            {/* reservations */}
            <ReservationsContainer />
            {/* orders */}
            <OrdersContainer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
