export default function validateName(string) {
  const exactString = string.trim(); //Should pass if send a text with empty spaces on the side & Should get error text if text is empty
  const validation = exactString.length > 0; //Should get error text if we send multiple invisible spaces
  const data = validation ? exactString : ""; //Should pass if everything is ok
  const error = validation ? "" : "A product name is required,ex:bed";

  return { data: data, error: error };
}
