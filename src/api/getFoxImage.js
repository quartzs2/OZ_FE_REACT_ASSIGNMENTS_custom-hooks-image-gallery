export const getFoxImage = async () => {
  const response = await fetch("https://randomfox.ca/floof");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};
