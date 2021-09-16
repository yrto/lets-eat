import React from "react";
import Heading from "./Heading";
import { render } from "@testing-library/react";

describe("Heading component", () => {
  it("renders children text", () => {
    const text = "hello";
    const { getByTestId } = render(<Heading>{text}</Heading>);
    const h2Element = getByTestId("heading");
    expect(h2Element.textContent).toBe(text);
  });
});
