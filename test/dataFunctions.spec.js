import { computeStats, filterData, sortData } from "../src/lib/dataFunctions.js";
import { data as fakeData } from "./data.js";

const BFOcupation = [
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
  {
    id: "14-illumi",
    name: "Illumi Zoldyck",
    shortDescription:
      "Es el hijo mayor de la familia Zoldyck. Al comienzo del anime apareció bajo el disfraz de Gittarackur.",
    description:
      "Illumi aparece durante el comienzo del examen, bajo el nombre de Gittarackur, donde su apariencia está distorsionada por sus alfileres. A lo largo de la trama, sostiene una actitud bastante inexpresiva, mostrándose frío, despiadado y concentrado solamente en sus intereses, sin involucrar sus sentimientos. Aun así, mantiene una extraña sobreprotección con su hermano Killua, hasta el punto en que usó su habilidad Nen para controlarlo y asegurar su sobrevivencia. Actualmente pertenece a la Brigada Fantasma. Tiene una amistad poco común con Hisoka, aunque no está claro en cuanto a cómo se desarrolló.",
    imageUrl: "https://i.ibb.co/K26sPT9/image.png",
    facts: {
      nenType: "Manipulador",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Agujas de manipulación", "Disfraz", "Hipnosis"],
    },
  },
];
const matNenType = [
  {
    id: "16-kite",
    name: "Kite",
    shortDescription:
      "Es el discipulo de Ging Freecss, consiguiendo dicho titulo tras una intensa búsqueda de su maestro.",
    description:
      "Kite es severo y estoico, en ocasiones contundente hasta el punto de parecer grosero. Aunque algunos pueden llegar a considerarlo insensible, realmente es un hombre cariñoso que ama a los animales tanto como a la gente. Aparece al comienzo de la trama, en  un bosque de Isla Ballena, donde fortuitamente le salva la vida a Gon y luego le comunica que su padre, Ging Freecss nunca murió, sino que es un cazador profesional y su mentor. Implantando así la semilla en Gon de conventirse en Cazador e ir también tras la pista de su padre.",
    imageUrl: "https://i.ibb.co/6Dynk4V/image.png",
    facts: {
      nenType: "Materializador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Crazy Slots"],
    },
  },
];
const sortAsc = [
  {
    id: "07-biscuit",
    name: "Biscuit Krueger",
    shortDescription:
      "Es una Cazadora de Tesoros de Dos Estrellas que se enlistó para terminar el videojuego Greed Island.",
    description:
      "Biscuit, o Bisky tiene una personalidad muy astuta. Al principio, ocupa su apariencia de niña para obtener información, obtener lo que quiere, o incluso en combates, en donde actúa de forma inocente e indefensa, para que sus enemigos bajen la guardia. Sin embargo, como profesora de Nen, es muy severa y seria con sus estudiantes. También tiende a tener arranques violentos cuando es dejada fuera de una conversación o alguien la llama 'vieja'. En su forma original, es alta y extremadamente musculosa. Dice que escoge su forma de niña como estrategia, pero la verdad es porque odia su forma original.",
    imageUrl: "https://i.ibb.co/HpHxs39/image.png",
    facts: {
      nenType: "Intensificador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación musculosa"],
    },
  },
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
  {
    id: "14-illumi",
    name: "Illumi Zoldyck",
    shortDescription:
      "Es el hijo mayor de la familia Zoldyck. Al comienzo del anime apareció bajo el disfraz de Gittarackur.",
    description:
      "Illumi aparece durante el comienzo del examen, bajo el nombre de Gittarackur, donde su apariencia está distorsionada por sus alfileres. A lo largo de la trama, sostiene una actitud bastante inexpresiva, mostrándose frío, despiadado y concentrado solamente en sus intereses, sin involucrar sus sentimientos. Aun así, mantiene una extraña sobreprotección con su hermano Killua, hasta el punto en que usó su habilidad Nen para controlarlo y asegurar su sobrevivencia. Actualmente pertenece a la Brigada Fantasma. Tiene una amistad poco común con Hisoka, aunque no está claro en cuanto a cómo se desarrolló.",
    imageUrl: "https://i.ibb.co/K26sPT9/image.png",
    facts: {
      nenType: "Manipulador",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Agujas de manipulación", "Disfraz", "Hipnosis"],
    },
  },
  {
    id: "16-kite",
    name: "Kite",
    shortDescription:
      "Es el discipulo de Ging Freecss, consiguiendo dicho titulo tras una intensa búsqueda de su maestro.",
    description:
      "Kite es severo y estoico, en ocasiones contundente hasta el punto de parecer grosero. Aunque algunos pueden llegar a considerarlo insensible, realmente es un hombre cariñoso que ama a los animales tanto como a la gente. Aparece al comienzo de la trama, en  un bosque de Isla Ballena, donde fortuitamente le salva la vida a Gon y luego le comunica que su padre, Ging Freecss nunca murió, sino que es un cazador profesional y su mentor. Implantando así la semilla en Gon de conventirse en Cazador e ir también tras la pista de su padre.",
    imageUrl: "https://i.ibb.co/6Dynk4V/image.png",
    facts: {
      nenType: "Materializador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Crazy Slots"],
    },
  },
  {
    id: "10-meruem",
    name: "Meruem",
    shortDescription:
      "Fue el más poderoso descendiente de la hormiga quimera reina, y el Rey de las Hormigas Quimera.",
    description:
      "Es el antagonista principal del arco de las Hormigas Quimera. Su apariencia es un homenaje a otro famoso antagonista del manga: Cell de Dragon Ball Z. Inicialmente se ve como un líder cruel y violento. La intención de la Reina por dar a luz a una descendencia perfecta se refleja en la mentalidad de Meruem, quien se considera superior a todas las demás formas de vida. A medida que la historia avanza, Meruem empieza a cuestionar las diferencias entre las hormigas y la humanidad e incluso cuestiona la naturaleza de la violencia y la fuerza como el verdadero poder.",
    imageUrl: "https://i.ibb.co/Zxq3BTB/image.png",
    facts: {
      nenType: "Especialista",
      ocupation: "Hormiga quimera",
      species: "Hormiga quimera",
    },
    extraInfo: {
      abilities: ["Síntesis de Aura", "Metamorfosis", "Ráfaga de ira", "Fotón"],
    },
  },
];
const sortDesc = [
  {
    id: "10-meruem",
    name: "Meruem",
    shortDescription:
      "Fue el más poderoso descendiente de la hormiga quimera reina, y el Rey de las Hormigas Quimera.",
    description:
      "Es el antagonista principal del arco de las Hormigas Quimera. Su apariencia es un homenaje a otro famoso antagonista del manga: Cell de Dragon Ball Z. Inicialmente se ve como un líder cruel y violento. La intención de la Reina por dar a luz a una descendencia perfecta se refleja en la mentalidad de Meruem, quien se considera superior a todas las demás formas de vida. A medida que la historia avanza, Meruem empieza a cuestionar las diferencias entre las hormigas y la humanidad e incluso cuestiona la naturaleza de la violencia y la fuerza como el verdadero poder.",
    imageUrl: "https://i.ibb.co/Zxq3BTB/image.png",
    facts: {
      nenType: "Especialista",
      ocupation: "Hormiga quimera",
      species: "Hormiga quimera",
    },
    extraInfo: {
      abilities: ["Síntesis de Aura", "Metamorfosis", "Ráfaga de ira", "Fotón"],
    },
  },
  {
    id: "16-kite",
    name: "Kite",
    shortDescription:
      "Es el discipulo de Ging Freecss, consiguiendo dicho titulo tras una intensa búsqueda de su maestro.",
    description:
      "Kite es severo y estoico, en ocasiones contundente hasta el punto de parecer grosero. Aunque algunos pueden llegar a considerarlo insensible, realmente es un hombre cariñoso que ama a los animales tanto como a la gente. Aparece al comienzo de la trama, en  un bosque de Isla Ballena, donde fortuitamente le salva la vida a Gon y luego le comunica que su padre, Ging Freecss nunca murió, sino que es un cazador profesional y su mentor. Implantando así la semilla en Gon de conventirse en Cazador e ir también tras la pista de su padre.",
    imageUrl: "https://i.ibb.co/6Dynk4V/image.png",
    facts: {
      nenType: "Materializador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Crazy Slots"],
    },
  },
  {
    id: "14-illumi",
    name: "Illumi Zoldyck",
    shortDescription:
      "Es el hijo mayor de la familia Zoldyck. Al comienzo del anime apareció bajo el disfraz de Gittarackur.",
    description:
      "Illumi aparece durante el comienzo del examen, bajo el nombre de Gittarackur, donde su apariencia está distorsionada por sus alfileres. A lo largo de la trama, sostiene una actitud bastante inexpresiva, mostrándose frío, despiadado y concentrado solamente en sus intereses, sin involucrar sus sentimientos. Aun así, mantiene una extraña sobreprotección con su hermano Killua, hasta el punto en que usó su habilidad Nen para controlarlo y asegurar su sobrevivencia. Actualmente pertenece a la Brigada Fantasma. Tiene una amistad poco común con Hisoka, aunque no está claro en cuanto a cómo se desarrolló.",
    imageUrl: "https://i.ibb.co/K26sPT9/image.png",
    facts: {
      nenType: "Manipulador",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Agujas de manipulación", "Disfraz", "Hipnosis"],
    },
  },
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
  {
    id: "07-biscuit",
    name: "Biscuit Krueger",
    shortDescription:
      "Es una Cazadora de Tesoros de Dos Estrellas que se enlistó para terminar el videojuego Greed Island.",
    description:
      "Biscuit, o Bisky tiene una personalidad muy astuta. Al principio, ocupa su apariencia de niña para obtener información, obtener lo que quiere, o incluso en combates, en donde actúa de forma inocente e indefensa, para que sus enemigos bajen la guardia. Sin embargo, como profesora de Nen, es muy severa y seria con sus estudiantes. También tiende a tener arranques violentos cuando es dejada fuera de una conversación o alguien la llama 'vieja'. En su forma original, es alta y extremadamente musculosa. Dice que escoge su forma de niña como estrategia, pero la verdad es porque odia su forma original.",
    imageUrl: "https://i.ibb.co/HpHxs39/image.png",
    facts: {
      nenType: "Intensificador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación musculosa"],
    },
  },
];
const nenStats = {
  Especialista: 2,
  Intensificador: 1,
  Manipulador: 1,
  Materializador: 1,
};

describe("filterData", () => {
  it("Debe retornar un personaje con la ocupación `Brigada Fantasma`", () => {
    expect(filterData(fakeData, "ocupation", "Brigada Fantasma")).toEqual(
      BFOcupation
    );
  });

  it("Debe retornar un personaje con el tipo de Nen `Materializador`", () => {
    expect(filterData(fakeData, "nenType", "Materializador")).toEqual(
      matNenType
    );
  });
});

describe("sortData", () => {
  it("Debe retornar el array ordenador ascendentemente, según los nombres de los personajes", () => {
    expect(sortData(fakeData, "name", "asc")).toEqual(sortAsc);
  });

  it("Debe retornar el array ordenador descendentemente, según los nombres de los personajes", () => {
    expect(sortData(fakeData, "name", "desc")).toEqual(sortDesc);
  });
});

describe("compueStats", () => {
  it("Debe retornar la cantidad de personajes que compartan el mismo tipo de Nen", () => {
    expect(computeStats(fakeData)).toEqual(nenStats);
  });
});
