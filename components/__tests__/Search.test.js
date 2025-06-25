import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import Mock_Data from "../MockData/BodyResDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { expect, jest } from "@jest/globals";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("should load the body component with search functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardBefore = screen.getAllByTestId("res-card");
  expect(resCardBefore).toHaveLength(20);
  const searchIN = screen.getByTestId("search-input");
  const btn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchIN, { target: { value: "Pizza" } });
  fireEvent.click(btn);
  const resCardAfter = screen.getAllByTestId("res-card");
  expect(resCardAfter).toHaveLength(2);
});
it("should load the body component with filter functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const resCardBefore = screen.getAllByTestId("res-card");
  expect(resCardBefore).toHaveLength(20);
  const filterBtn = screen.getByRole("button", {
    name: "Filter above 4.4 star",
  });
  fireEvent.click(filterBtn);
  const resCardAfter = screen.getAllByTestId("res-card");
  expect(resCardAfter).toHaveLength(7);
});
