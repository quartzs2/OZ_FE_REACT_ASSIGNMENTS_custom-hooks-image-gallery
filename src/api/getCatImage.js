export const getCatImage = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};
