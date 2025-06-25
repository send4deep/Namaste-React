import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { jest, expect } from "@jest/globals";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import RES_MENU from "../MockData/RestaurantMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RES_MENU),
  });
});

it("Should load the Restaurant Menu Component with Header and right cart functionality functioning", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });
  const MenuItem = screen.getByText("Flash Sale Pizzas (2)");
  expect(MenuItem).toBeInTheDocument();
  fireEvent.click(MenuItem);
  expect(screen.getAllByTestId("sub-menu-item")).toHaveLength(2);
  expect(screen.getByText("Cart: 0 items")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart: 1 items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart: 2 items")).toBeInTheDocument();
  expect(screen.getAllByTestId("sub-menu-item")).toHaveLength(4);
});
