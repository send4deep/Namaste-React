import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

it("should load header component with login button component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const btn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(btn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

it("should load header component with 0 items in cart", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const cartLink = screen.getByText("Cart: 0 items");
  expect(cartLink).toBeInTheDocument();
});
