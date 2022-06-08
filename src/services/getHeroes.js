export const getHeroes = async () => {
  const URL = `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
