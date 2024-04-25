import { card } from "./card.js";

export const cards = (data) => {
  const ul = document.createElement("ul");
  data.forEach((character) => {
    const li = card(character);
    ul.appendChild(li);
    //ul.innerHTML = ul.innerHTML + li; // Inserta cada tarjeta en el contenedor
  });
  return ul;
};
