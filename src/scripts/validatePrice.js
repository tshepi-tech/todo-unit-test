// Pure
export default function validatePrice(price) {
  const trimPrice = String(price).trim();
  const exactNumber = Number(trimPrice);
  const validation = exactNumber > 0; //Should render error if price is 0 because no product cost 0
  const data = validation ? exactNumber : ""; //Should pass if you send a positive price
  const error = validation ? "" : "Please provide a product price more than 0"; // Should render error if text is empty & Should render error if price is negative because products should cost more than 1

  return { data: data, error: error };
}
