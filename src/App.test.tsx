import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("main component testing", () => {
  it("renders hello word", () => {
    render(<App />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
