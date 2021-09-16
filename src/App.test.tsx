import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

// jest.mock("react", () => ({
//   useState: () => ({
//     user: { name: "Ayrton", role: "admin" },
//     setUser: () => null,
//   }),
// }));

describe("main component testing", () => {
  it("renders reservations and orders containers", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const reservationsContainer = screen.getByText(/Reservations/i);
    const ordersContainer = screen.getByText(/Orders/i);
    expect(reservationsContainer).toBeInTheDocument();
    expect(ordersContainer).toBeInTheDocument();
  });
});
