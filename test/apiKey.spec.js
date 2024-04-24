import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    // Desarrolla el test correspondiente aquí
    //null porque no tiene retorno
    expect(setApiKey("api-key")).toEqual(null);
  });
});

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí
    expect(getApiKey()).toEqual("api-key");
  });
});
