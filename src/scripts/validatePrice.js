// Pure
export default function validatePrice(price) {
  const exactNumber = Number(price.trim());
  const validation = exactNumber > 0;
  const data = validation ? exactNumber : "";
  const error = validation ? "" : "Please provide a product price more than 0";

  return { data: data, error: error };
}
