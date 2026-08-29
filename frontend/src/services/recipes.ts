const url = "http://localhost:3000/api/recipes";

const getAll = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`getAll: response status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default { getAll };
