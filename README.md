
# [Hunter X Verse X Chat](https://hunterxversexchat.vercel.app/)
## Preámbulo
El mundo del anime no deja de expandirse y evolucionar, capturando la imaginación de personas de todas las edades, etnias y culturas, siendo una experiencia que ha ido trasciendiendo generaciones.
Nuestra aplicación está diseñada para conectar a los aficionados del anime, ofreciendo una plataforma dinámica y accesible para explorar, descubrir y enriquecerse con este gran universo.

![Alt Text](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlmYzEwNHN1a2QzcTFrazdhaHQ0aG44dXc5bHhhNW9waTYyaHJlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/etW2P2cvB0PYY/giphy.gif)


## Descripción del proyecto
 [HunterxVersexChat](https://hunterxversexchat.vercel.app/)  es una SPA intuitiva, informativa e interactiva, que permite a usuarios objetivos acceder rápidamente a información detallada y organizada de 24 personajes, algunos de los principales del complejo universo del anime ["Hunter x Hunter"](https://es.wikipedia.org/wiki/Hunter_%C3%97_Hunter).

Siendo ésta una segunda versión de [HunterxVerse](https://milenpg.github.io/DEV014-Dataverse/src/), se ha desarrollado una nueva funcionalidad que permite interactuar con cada uno de los personajes a través de un chatbox individual. Además, como segunda instancia, se ha integrado un chatbox grupal, en donde los usuarios podrán comunicarse de manera directa con todos los personajes del anime al mismo tiempo, permitiendo enriquecer la experiencia interactiva.

## Desarrolladores

 :octocat: [Nicole Aburto O.](https://github.com/Niconsuelo)

 :octocat: [Milén Palma G.](https://github.com/MilenPG)

## Consideraciones generales
- En función de mejorar el rendimiento, la facilidad de uso y eficiencia de desarrollo, el proyecto se ha desplegado en [Vercel](https://vercel.com/).
- Se ha implementado una integración de API externa: [OpenAI API](https://openai.com/index/openai-api/).
- [HunterxVersexChat](https://hunterxversexchat.vercel.app/) se ha diseñado con una interfaz _responsive_, que garantiza una experiencia de usuario óptima en una amplia gama de dispositivos, aplicando desarrollo "mobile first".
- Con el propósito de dar una experiencia más fluida a los usuarios se ha desarrollado una aplicación de página única (SPA).
- Centrado en el usuario, se han utilizado historias de usuario para guiar cada etapa del diseño y la implementación.


## Funcionalidad
A continuación se detallan cada una de las funcionalidades desarrolladas:

- **Chat individual:** Permite interacción entre usuario y personajes de manera individual para obtener información precisa sobre cada uno de los personajes.

- **Chat grupal:** Permite la interacción entre el usuario y los 24 personajes del anime al mismo tiempo.

![Alt Text](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2dtdmF1d3JscmFwZjl1ajJwb3FpbGl5aDJxM3Z4eXFvNnk1NmUxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4jamu9obYceTjTNptY/giphy.gif)


## Tecnologías y recursos
El proyecto se ha desarrollado en base a la siguiente estructura de archivos:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

Para desarrollar esta segunda versión, HunterxVersexChat, se han utilizado diferentes herramientas y tecnologías que permiten que el proyecto cumpla con los requerimientos técnicos específicos y además, obtener un producto de alta calidad en cuanto a la experiencia de usuaries:

**- Manejo API key**
Permite obtener un mecanismo simple de autenticación para acceder a servicios externos, en este caso, la API OpenAI. Almacenándose en el local storage, asegura que la solicitud a la API provienen de una fuente autorizada. 

**- SPA**
El uso del modelo Single Page Application permite interactuar con el usuario reescribiendo dinamicamente la pagina actual sin necesidad de recargar la web entera. Esto permite que mejore la experiencia de usuario en cuanto la rapidez y fluidez en el manejo.

**- Modularización**
Manejo de componentes para mejorar la estructura y organización de la aplicación. Facilita el entendimiento y permite manejar correctamente el funcionamiento del código.

**- Petición HTTP**
Generación de solicitud HTTP utilizando promesas mediante fetch, para poder conectar nuestra SPA con la API.

**- Figma**
Desarrollo de diseño para cada componente y vista de la interfaz. 

**- Test**
Elaboración de test unitarios: almacenamiento API key y uso de mock para solicitud con fetch.


## Diseño de interfaz

Las características específicas del diseño están basadas en un proceso investigativo que se resolvió en la creación de un contenido diseñado estratégicamente, que utiliza elementos visuales relativos a la serie. Esto permite que las usuarias puedan envolverse en el mundo de Hunter x Hunter, enriqueciendo su experiencia.

Desde este [*primer prototipo de alta fidelidad*](
https://www.figma.com/proto/3Rf37tPhYsVPqcpihtN1kx/Hunter-X?node-id=215-444&t=8L1CREw0YxTBiEQC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=215%3A444&show-proto-sidebar=1), levantamos un testeo de usabilidad. A partir de las sugerencias de quienes participaron, se realizaron las modificaciones que nos llevaron al producto final. 


#### Vista chat grupal:

**Mobile**

![prompting](https://github.com/MilenPG/DEV014-dataverse-chat/blob/main/src/assets/gchatMobile.png.jpeg?raw=true)



**Tablet**

![prompting](https://github.com/MilenPG/DEV014-dataverse-chat/blob/main/src/assets/gchatTablet.png.jpeg?raw=true)


**Desktop**

![prompting](https://github.com/MilenPG/DEV014-dataverse-chat/blob/main/src/assets/gchatDesktop.png.jpeg?raw=true)




<!-- ## How does it work?

En función a crear una mejor experiencia de usuario, se han definido los siguientes instrucciones de uso para utilizar HunterxVersexChat

En la pantalla principal, se encuentra una vista general de la aplicación, la cual contendrá:

- Aunteticador de API key
- Acceso directo para iniciar comunicación con todos los personajes del anime.
- Visualización de 24 card con los personajes principales del anime:
- Al hacer click sobre la card, se ejecuta el cambio de vista para iniciar chat individual con el personaje clickeado.


*** -->

***MilNic 2024 &copy; Hunter X Verse***

