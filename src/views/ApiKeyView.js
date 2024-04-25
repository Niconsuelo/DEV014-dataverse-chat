import { setApiKey } from '../lib/apiKey.js';

const ApiKey = () => {
  const viewEl = document.createElement('div');
  const viewApiKey = `
<div class='view-api-key'>
  <div class='form-api-key'>
    <h1 class='h-apikey'>API Key</h1>
    <input class= 'input-api-key' id='input-api-key' placeholder='Ingresa aquí tu API Key'/>
    <button class='button-api-key' id='api-key-button'>INGRESAR</button>
    <p class='api-text'>Para acceder al chat grupal o individual, necesitas registrar una API Key que permita activar la funcionalidad requerida.</p>
    <p class='api-text'>¿Quieres generar la tuya? ¿No sabes qué es?</p>
    <a class='apikey-link' href='https://platform.openai.com/docs/overview'>HAZ CLICK AQUÍ.</a>
  </div> 
</div>
   
`;

  viewEl.innerHTML = viewApiKey;

  const apiKeyButton = viewEl.querySelector('#api-key-button');
  apiKeyButton.addEventListener('click', function () {
    const apiKeyInput = viewEl.querySelector('#input-api-key').value;
    setApiKey(apiKeyInput); // Al hacer click, estamos invocando esta función que guardará la API Key en el local Storage. 
  });

  return viewEl;
};

export default ApiKey;
