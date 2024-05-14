import { communicateWithOpenAI } from '../src/utils/openAIApi.js';

// Configura Jest para mockear 'fetch'
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();  // Limpia las instancias previas para asegurar tests aislados
});

describe('communicateWithOpenAI', () => {
  test('should return example data', () => {
    // Configura fetch para resolver con un objeto específico que imita una respuesta de API
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve('example'),  // Resuelve como 'example'
    });

    return communicateWithOpenAI().then(data => {
      expect(data).toBe('example');
    });
  });

  test('should handle failure', () => {
    // Configura fetch para rechazar o para resolver con un estado de error
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
      json: () => Promise.resolve({ message: 'Error' }),
    });

    return communicateWithOpenAI().then(data => {
      expect(data).toMatchObject({ error: 'API call failed' });
    }).catch(error => {
      expect(error.message).toContain('Not Found');
    });
  });
});


//mock 
// window.fetch = jest.fn();
//fetch.mockResolvedValueOnce;