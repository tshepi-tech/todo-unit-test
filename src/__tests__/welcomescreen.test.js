import { render, screen } from "@testing-library/react";

import WelcomeScreen from "../screens/WelcomeScreen";

test("renders the title of the page", async () => {
  render(<WelcomeScreen title="EIKA's shopping list" />);
  const titleElement = screen.getByText(/EIKA's shopping list/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders a button with text", async () => {
  render(<WelcomeScreen />);
  const buttonElement = screen.getByRole("button", { name: /Add item/i });
  expect(buttonElement).toBeInTheDocument();
});

test("renders introduction information", async () => {
  render(<WelcomeScreen />);
  const paragraphElement = screen.getByText(
    /Welcome to EIKA’s shopping list. Here you will be able to create a todo list with for the furniture you want to buy./i
  );
  expect(paragraphElement).toBeInTheDocument();
});
