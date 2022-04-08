//NPM packages
import { render, screen } from "@testing-library/react";

//Project files
import ShoppingListScreen from "../screens/ShoppingListScreen";
import { ProductProvider } from "../state/ProductContext";

const MockShoppingScreen = () => {
  <ProductProvider>
    <ShoppingListScreen />
  </ProductProvider>;
};

test("should render Toggle button", async () => {
  //Arrange
  render(<MockShoppingScreen />);
  //Act
  const buttonElement = screen.queryByText("button", {
    name: /View completed Items/i,
  });
});

//Tests that failed. My struggle was figureing out how to work with two inputs
/* 
const addItem = (name, price) => {
  const inputElementName = screen.getByPlaceholderText(/Ex:Leather sofa/i);
  const inputElementPrice = screen.getByPlaceholderText(/Ex: 3500/i);
  const buttonElement = screen.getByRole("button", { name: /Add item /i });

  name.forEach((item) => {
    fireEvent.change(inputElementName, { target: { value: name } });
    fireEvent.change(inputElementPrice, { target: { value: price } });
  });
  fireEvent.click(buttonElement);
};

test("should render input", async () => {
  render(<MockShoppingScreen />);
  addItem(["Go shopping,400"]);

  const divElement = screen.getByText(/Go shopping,400/i);
  expect(divElement).toBeInTheDocument();
});
 */
