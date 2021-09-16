import React, { useState } from "react";
import Input from "./Input";
import { render, fireEvent } from "@testing-library/react";

describe("Input component", () => {
  //
  it("renders placeholder text", () => {
    const text = "hello";
    const { getByTestId } = render(<Input placeholder={text} />);
    const inputElement = getByTestId("input");
    expect(inputElement.placeholder).toBe(text);
  });

  it("handles onChange event", () => {
    let value = "";
    const { getByTestId } = render(
      <Input value={value} onChange={(e) => (value = e.target.value)} />
    );
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "42" } });
    expect(value).toBe("42");
  });

  it("handles onKeyDown event", () => {
    let value = "";
    let submitValue = "";
    const { getByTestId } = render(
      <Input
        value={value}
        onChange={(e) => (value = e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value !== "") submitValue = value;
        }}
      />
    );
    const inputElement = getByTestId("input");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(submitValue).toBe("");
  });
});
