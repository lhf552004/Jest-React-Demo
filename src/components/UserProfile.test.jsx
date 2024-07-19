// src/components/UserProfile.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom";

test("displays user information", async () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };
  render(<UserProfile user={user} />);
  expect(await screen.findByText("John Doe")).toBeInTheDocument();
  expect(await screen.findByText("john.doe@example.com")).toBeInTheDocument();
  expect(await screen.findByText("30")).toBeInTheDocument();
});
