import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('setApiKey', () => {

  //Como el funcionamiento de localStorage no lo controlamos, ni depende de nuestra función, no sirve hacer un test
  //Entonces, en lugar de hacer un test, deberíamos hacer un MOCK (simulación de la realidad).
  //Sugiere hacer un test sobre funcionamiento de promesa de la API key con OpenAI

  it('debería establecer correctamente la API Key', () => {
    expect(setApiKey('api-input')).toEqual(null); //Duda Milen: si le agregamos segundo param a setApiKey = null, falla. Mi no entender 
  });
});

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    expect(getApiKey()).toEqual('api-input');
  });
});

