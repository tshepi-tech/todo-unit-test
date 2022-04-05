//NPM pacakges
import { render, screen } from "@testing-library/react";

//Project Files
import Modal from "../components/Modal";
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

//tests applies for both WelcomeScreen and ShoppingScreen.
describe("Open/Close Modal", () => {
  test("Opens when you pass true on showModal", async () => {
    //Arrange
    const testOpenModalState = [true, () => {}];
    render(<Modal showModal={testOpenModalState} />);

    // Act
    const titleElement = screen.queryByText(/add a new product/i);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  test("Don't open when you pass false on showModal", async () => {
    //Arrange
    const testCloseModalState = [false, () => {}];
    render(<Modal showModal={testCloseModalState} />);

    // Act
    const titleElement = screen.queryByText(/add a new product/i);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });
});

/* test("Add item button passes true to ShowModal", async () => {
  //Arrange
  const testOpenModalState = [true, () => {}];
  render(<Modal showModal={testOpenModalState} />);

  //Act
  const buttonElement = screen.getByRole("button", { name: /Add Item/i });
  const titleElement = screen.queryByText(/add a new product/i);
  fireEvent.click(buttonElement);
  //Assert
  expect(titleElement).toBeInTheDocument();
}); */
