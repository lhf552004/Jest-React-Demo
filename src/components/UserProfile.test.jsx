import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
beforeEach(() => {
  fetch.resetMocks(); // Reset mocks before each test
});

test("displays user information from API", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
    })
  );

  render(<UserProfile userId={1} />);
  expect(await screen.findByText("John Doe")).toBeInTheDocument();
  expect(await screen.findByText("john.doe@example.com")).toBeInTheDocument();
  expect(await screen.findByText("30")).toBeInTheDocument();
  expect(await screen.findByText("Environment: test")).toBeInTheDocument();
});
