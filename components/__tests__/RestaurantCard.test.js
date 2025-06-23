import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MockData from "../MockData/RestaurantCardMock.json";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

it("should render the RestaurantCard component with right data", () => {
  render(<RestaurantCard resList={MockData} />);
  const resName = screen.getByText("Daily Kitchen - Everyday Homely Meals");
  expect(resName).toBeInTheDocument();
});
