import { computeStats } from "../lib/dataFunctions.js";

export const stats = (data) => {
  const computeNenStats = computeStats(data);
  const viewStats = `
<h4 id="stats-h">Cantidad de personajes por tipo de Nen</h4>
<div class="stats-box">
<dl> 
  <dt>Intensificación: </dt><dd>${computeNenStats.Intensificador}</dd>
  <dt>Transmutación: </dt><dd>${computeNenStats.Transmutador}</dd>
  <dt>Materialización: </dt><dd>${computeNenStats.Materializador}</dd>
</dl><dl>  
  <dt>Emisión: </dt><dd>${computeNenStats.Emisor}</dd>
  <dt>Manipulación: </dt><dd>${computeNenStats.Manipulador}</dd>
  <dt>Especialización: </dt><dd>${computeNenStats.Especialista}</dd>
</dl>
</div>`;

  return viewStats;
};
