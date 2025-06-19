import Contact from "../Contact";
import { screen, render } from "@testing-library/react";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";

describe("Contact Component Testing", () => {
  test("should render the component with h1 heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should render the form with two input field", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    expect(input).toHaveLength(2);
  });
  test("should render the submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });
});
