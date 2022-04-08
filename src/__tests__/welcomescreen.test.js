//NPM pacakges
import { render, screen } from "@testing-library/react";

//Project Files
import Modal from "../components/Modal";
import WelcomeScreen from "../screens/WelcomeScreen";

test("renders the title of the page", async () => {
  //Arrange
  render(<WelcomeScreen title="EIKA's shopping list" />);
  //Act
  const titleElement = screen.getByText(/EIKA's shopping list/i);
  //Assert
  expect(titleElement).toBeInTheDocument();
});

test("renders a button with text", async () => {
  //Arrange
  render(<WelcomeScreen />);
  //Act
  const buttonElement = screen.getByRole("button", { name: /Add item/i });
  //Assert
  expect(buttonElement).toBeInTheDocument();
});

test("renders introduction information", async () => {
  //Arrange
  render(<WelcomeScreen />);
  //Act
  const paragraphElement = screen.getByText(
    /Welcome to EIKA’s shopping list. Here you will be able to create a todo list with for the furniture you want to buy./i
  );
  //Assert
  expect(paragraphElement).toBeInTheDocument();
});
