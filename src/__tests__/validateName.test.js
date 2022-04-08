// Project files
import validateName from "../scripts/validateName";

test("Should pass if everything is ok", () => {
  // Arrange
  const testValidName = "couch";
  const resultData = "couch";
  const resultError = "";

  // Act
  const validation = validateName(testValidName);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should get error text if text is empty", () => {
  // Arrange
  const testOneEmptySpace = "";
  const resultData = "";
  const resultError = "A product name is required,ex:bed";

  // Act
  const validation = validateName(testOneEmptySpace);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should get error text if we send multiple invisible spaces", () => {
  // Arrange
  const testMutipleEmptySpaces = "   ";
  const resultData = "";
  const resultError = "A product name is required,ex:bed";

  // Act
  const validation = validateName(testMutipleEmptySpaces);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should pass if send a text with empty spaces on the side of a valid name", () => {
  // Arrange
  const testValidNameWith3Spaces = "   BED  ";
  const resultData = "BED";
  const resultError = "";

  // Act
  const validation = validateName(testValidNameWith3Spaces);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});
