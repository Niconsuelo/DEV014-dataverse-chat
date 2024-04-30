import { card } from "./card.js";

export const cards = (data) => {
  const ul = document.createElement("ul");
  data.forEach((character) => {
    const li = card(character);
    ul.appendChild(li); // Inserta cada tarjeta en el contenedor
  });

  return ul;
};
