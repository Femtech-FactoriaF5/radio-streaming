# radio streaming: Repaso de React 

## Introducción

Vamos a construir una aplicación para seleccionar y buscar emisoras de radio en streaming.

## Estructuras para practicar:
    - crear componentes y funciones
    - hooks: `useState()`
    - instalar librerías: axios, react-icons, librerías de estilo
    - props y paso de variables entre componentes.
    
## Iteraciones
   
### Iteración 1: Construir una aplicación con React que muestre una página con el título "RADIO FACTORIA".
   _Tasks:_<br>
   - Generar el esqueleto de la aplicación<br>
   - Crear un elemento en el componente `App` que muestre el título "Radio Factoría!".<br>
      
### Iteración 2: Crear un buscador de Emisoras
   _Tasks:_<br>
   - Crear un elemento `input` con el placeholder "Escribe el nombre de la radio"<br>
   - Crear un botón de búsqueda con el texto "Buscar"<br>
      
### Iteración 3: El evento clic en el botón buscar debe ejecutar una función que obtenga un listado de emisoras
   _Tips:_ 
   - Recuerda que para poder trabajar con un control de un formulario necesitas una función que escuche el evento onChange del Control.<br>
   _Tasks:_
   - Crea una función en el componente App que recoja el valor del control. Ese valor debe almacenarse en una variable de estado.
   - Crea una función en el componente App para realizar la búsqueda. Esta función realizará las siguientes tareas:
   - Asociará el valor recogido del control a la url de la api de búsqueda de emisoras:
        ```js
        const url = "https://fr1.api.radio-browser.info/json/stations/byname/" + busqueda
        ```

   - Almacenará el resultado que devuelva la api en una variable de estado que sea un array.
          
### Iteración 4: Listado de emisoras
   _Tasks:_<br>
   - El listado se insertará dentro de una sección de la página en el componente App.<br>
   - Al leer el listado se insertará el nombre de la emisora y el icono `IoPlay` de la librería `react-icons/io5`<br>
   - Asociar al evento onClick del icono `IoPlay` una función anónima que, a su vez, invoque una función `playRadio`.<br>
   - Si el array está vacío, porque no hay ninguna emisoara se debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda".<br>
### Iteración 5: Función playRadio
   _Tasks:_<br>
   - La función recibe por parámetro un objeto radio (cada uno de los elementos del resultado de la búsqueda)<br>
   - Instancia un objeto `Audio` (https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) pasando la url de la emisora de radio.<br>
   - Invoca al método play del objeto.<br>
### Iteración 6: Estilos
  _Tasks:_<br>
  - Dale estilos a la aplicación utilizando algún framework de estilos para React.<br>
### Iteración 7: Refactorizar
  _Tasks:_<br>
  - Lleva los componentes buscador y elementos de la búsqueda a dos componentes `Search` y `ListItem` <br>
  - Pasa los métodos y los estados desde el componente App.<br>
### Iteración 8: GitHub
  _Tasks:_<br>
  - Sube el repositorio a Github.
### Iteración 9: GitHub Page
  _Tasks:_<br>
  - Haz un build de la aplicación
  - Renómbralo como docs
  - Genera una gh-pages a partir de la carpeta docs.
