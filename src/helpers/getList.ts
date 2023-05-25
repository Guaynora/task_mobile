export const getList = async () => {
  const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
