import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    expect(setApiKey('api-input')).toEqual(null); //Duda Milen: si le agregamos segundo param a setApiKey = null, falla. Mi no entender 
    // Desarrolla el test correspondiente aquí
  });
});

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    expect(getApiKey()).toEqual('api-input');
    // Desarrolla el test correspondiente aquí
  });
});

