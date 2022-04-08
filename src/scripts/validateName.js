export default function validateName(string) {
  const exactString = string.trim();
  const validation = exactString > 0;
  const data = validation ? exactString : "";
  const error = validation ? "" : "Please provide a product name, ex:Couch";
  return { data: data, error: error };
}
