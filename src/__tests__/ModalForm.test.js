//NPM packages
import { render, screen, fireEvent } from "@testing-library/react";

//Project Files
import { ProductProvider } from "../state/ProductContext";
import ModalForm from "../components/ModalForm";

const ModalFormMock = () => {
  return (
    <ProductProvider>
      <ModalForm />
    </ProductProvider>
  );
};

test("", () => {});

/* test("should have empty input after clicking cancel button", async () => {
    const testModalState = [null, () => {}];
    render(<ModalFormMock setShowModal={testModalState} />);
    const inputElementName = screen.getByPlaceholderText(/Ex:Leather sofa/i);
    const buttonElement = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(buttonElement);
    expect(inputElementName.value).toBe("");
  });
}); */
