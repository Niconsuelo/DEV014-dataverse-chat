// esto deberia ir en home porque pertenece a la vista inicial que es HOME.

import { filterData, sortData } from "./lib/dataFunctions.js";
import data from "./data/dataset.js";
import { cards } from "./components/Cards.js";

const searchRoot = document.querySelector("#root");
searchRoot.appendChild(cards(data));

const selectfilterOcupation = document.querySelector("#filter-ocupation");
const nenSelect = document.querySelector("#select-filter");
const sortSelect = document.querySelector("#sort-select");

selectfilterOcupation.addEventListener("change", function (event) {
  let result = [];
  const optionFilter = event.target.value;
  result = filterData(data, "ocupation", optionFilter);
  const nenTypeSelect = nenSelect.value;
  if (nenTypeSelect !== "") {
    result = filterData(result, "nenType", nenTypeSelect);
  }
  const sortSelection = sortSelect.value;
  if (sortSelection !== "") {
    result = sortData(result, "name", sortSelection);
  }
  const root = document.querySelector("#root");
  root.innerHTML = "";
  searchRoot.appendChild(cards(result));
});

nenSelect.addEventListener("change", (e) => {
  let result = [];
  result = filterData(data, "nenType", e.target.value);
  const ocupationSelect = selectfilterOcupation.value;
  if (ocupationSelect !== "") {
    result = filterData(result, "ocupation", ocupationSelect);
  }
  const sortSelection = sortSelect.value;
  if (sortSelection !== "") {
    result = sortData(result, "name", sortSelection);
  }
  searchRoot.innerHTML = "";
  searchRoot.appendChild(cards(result));
});

sortSelect.addEventListener("change", function (event) {
  let result = data;
  const optionFilter = selectfilterOcupation.value;
  if (optionFilter !== "") {
    result = filterData(data, "ocupation", optionFilter);
  }
  const nenTypeSelect = nenSelect.value;
  if (nenTypeSelect !== "") {
    result = filterData(result, "nenType", nenTypeSelect);
  }
  const sortOrder = event.target.value;
  const originalData = Array.from(result);
  const sortCards = sortData(originalData, "name", sortOrder);
  searchRoot.innerHTML = "";
  searchRoot.appendChild(cards(sortCards));
});

const cleanerButton = document.querySelector("#cleaner-button");
cleanerButton.addEventListener("click", () => {
  selectfilterOcupation.value = "";
  nenSelect.value = "";
  sortSelect.value = "";
  searchRoot.innerHTML = "";
  searchRoot.appendChild(cards(data));
});

const statButton = document.querySelector("#stats-button");
statButton.addEventListener("click", function () {
  window.location.href = "index.html#stats-h";
});
