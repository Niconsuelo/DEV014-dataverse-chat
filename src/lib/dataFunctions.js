// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
// NO SE MODIFICA - AQUI SOLO DEBO PONER FUNCIONES QUE ME RETORNEN DATOS.

export function filterData(data, filterby, value) {
  const resultFilter = data.filter(
    (character) => character.facts[filterby] === value
  );
  return resultFilter;
}

export function sortData(data, sortBy, value) {
  if (value === "asc") {
    return data.sort((asc, desc) =>
      asc[sortBy].localeCompare(desc[sortBy]));
  } 
  else if (value === "desc") {
    return data.sort((asc, desc) =>
      desc[sortBy].localeCompare(asc[sortBy]));
  }
}

export function computeStats(data) {
  const nenStats = data.reduce(function (obj, character) {
    const nenType = character.facts.nenType;
    if (!obj[nenType]) {
      obj[nenType] = 1;
    } else {
      obj[nenType]++
    }

    return obj;
  }, {});
  return nenStats
}
