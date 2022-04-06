//NPM packages
import { render, screen, fireEvent } from "@testing-library/react";

//Project files
import InputField from "../components/InputField";
import inputSetup from "../data/inputSetup.json";

const mockedSetter = jest.fn();

describe("InputField name", () => {
  test("should render input for Product name ", async () => {
    //Arrange
    render(
      <InputField getter={[]} setter={mockedSetter} setup={inputSetup.name} />
    );
    //Act
    const inputElementName = screen.getByPlaceholderText(/Ex:Leather sofa/i);
    //Assert
    expect(inputElementName).toBeInTheDocument();
  });

  test("should render input for Product price", async () => {
    //Arrange
    render(
      <InputField getter={[]} setter={mockedSetter} setup={inputSetup.price} />
    );
    //Act
    const inputElementPrice = screen.getByPlaceholderText(/Ex: 3500/i);
    //Assert
    expect(inputElementPrice).toBeInTheDocument();
  });

  /* test("should be able to type into product name input", async () => {
    //Arrange
    render(
      <InputField getter={[]} setter={mockedSetter} setup={inputSetup.name} />
    );
    //Act
    const inputElementName = screen.queryByPlaceholderText(/Ex:Leather sofa/i);
    fireEvent.change(inputElementName, { target: { value: "Pillow" } });
    //Assert
    expect(inputElementName.value).toBe("Pillow");
  }); */

  /* test("should be able to type into product price input", async () => {
    //Arrange
    render(
      <InputField getter={[]} setter={mockedSetter} setup={inputSetup.price} />
    );
    //Act
    const inputElementPrice = screen.queryByPlaceholderText(/Ex: 3500/i);
    fireEvent.change(inputElementPrice, { target: { value: "300" } });
    //Assert
    expect(inputElementPrice.value).toBe("300");
  }); */
});
