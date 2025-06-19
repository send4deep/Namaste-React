import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe("About page testing", () => {
  it("should load the component with h1 heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should load the paragraph tag with component", () => {
    render(<About />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
