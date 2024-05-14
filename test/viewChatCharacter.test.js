/*import {chatCharacter} from '../src/views/ViewChatCharacter.js'
// montar el componente (metes la vista en el documento origiinal)
// crear el mock global fetch
// mandarle un texto dentro de la interfaz
// const p = document.querySelector('text-chat')
// expect(p.textContent).toBe('respuesta del mock')

describe('All test of view',()=>{
  beforeEach(()=>{
    document.body.innerHTML=chatCharacter({id:'01-gon'})
  })

  it('should have a class',()=>{
    const classCharacter = document.querySelector('.view-character-chat')
    console.log(classCharacter);
    expect(classCharacter).toBeDefined()
  })
  it('should have a response  of comunicate',()=>{
    global.fetch = jest.fn(()=> // jest.fn(cb => cb(null, true)); - resp => resp.json en vez de cb podríamos retornar el Promise.resolve // la promsea que rtorar un objeto quue retorna json el json tiene el texto jajaja); // terminar bien el mockeo
    ejecucion().then(respuesta=>{// cambiar ejecucion por tu funcion comunicate
        expect(respuesta.choices[0].message.content).toBe('jajaja')
    })
})
})
*/