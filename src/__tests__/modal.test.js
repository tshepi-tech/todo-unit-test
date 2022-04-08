//NPM packages
import { render, screen } from "@testing-library/react";

//Project Files
import Modal from "../components/Modal";
import MockupModal from "../mockups/Mockupmodal";

test("Modal opens up when ModalForm is passed in as a prop", () => {
  //Arrange
  const testModalState = [<MockupModal />, () => {}];
  render(<Modal modalState={testModalState} />);
  //Act
  const titleElement = screen.queryByText("Mockup Modal");
  //Asset
  expect(titleElement).toBeInTheDocument();
});

test("Don't open when you pass null on showModal", async () => {
  //Arrange
  const testCloseModalState = [null, () => {}];
  render(<Modal modalState={testCloseModalState} />);
  // Act
  const titleElement = screen.queryByText("Mockup Modal");
  // Assert
  expect(titleElement).not.toBeInTheDocument();
});
