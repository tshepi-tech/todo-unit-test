// Project files
import validatePrice from "../scripts/validatePrice";

test("Should fail if text is empty", () => {
  // Arrange
  const testEmptyText = "";
  const resultData = "";
  const resultError = "Please provide a product price more than 0";

  // Act
  const validation = validatePrice(testEmptyText);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should render error if price is 0 because no product cost 0", () => {
  // Arrange (setup)
  const testPriceZero = "0";
  const resultData = "";
  const resultError = "Please provide a product price more than 0";

  // Act (action)
  const validation = validatePrice(testPriceZero);

  // Assert (confirmation)
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should fail if price is negative because products should cost more than 1", () => {
  // Arrange
  const testInvalidPrice = "-1";
  const resultData = "";
  const resultError = "Please provide a product price more than 0";

  // Act
  const validation = validatePrice(testInvalidPrice);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

// Should pass if you send a positive price
test("Should pass if you send a positive price", () => {
  // Arrange
  const testValidPrice = "555";
  const resultData = 555;
  const resultError = "";

  // Act
  const validation = validatePrice(testValidPrice);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});
