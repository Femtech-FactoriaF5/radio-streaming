# radio streaming

## Introducción

Vamos a construir una aplicación para seleccionar y buscar emisoras de radio en streaming.

## Iteraciones

### Iteración 1: Construir una aplicación con React que muestre una página con el título "RADIO FACTORIA".
    _Tasks:_
      - Generar el esqueleto de la aplicación
      - Crear un elemento en el componente `App` que muestre el título "Radio Factoría!".
### Iteración 2: Crear un buscador de Emisoras
    _Tasks:_
      - Crar un elemento `input` con el placeholder "Escribe el nombre de la radio"
      - Crear un botón de búsqueda con el texto "Buscar"
### Iteración 3: El evento clic en el botón buscar debe ejecutar una función que obtenga un listado de emisoras
    _Tips:_ Recuerda que para poder trabajar con un control de un formulario necesitas una función que escuche el evento onChange del Control.
    _Tasks:_
      - Crea una función en el componente App que recoja el valor del control. Ese valor debe almacenarse en una variable de estado.
      - Crea una función en el componente App para realizar la búsqueda. Esta función realizará las siguientes tareas:
          - Asociará el valor recogido del control a la url de la api de búsqueda de emisoras: 
            ```js
            const url = "https://fr1.api.radio-browser.info/json/stations/byname/" + busqueda
            ```
          - Almacenará el resultado que devuelva la api en una variable de estado que sea un array.
### Iteración 4: Listado de emisoras
    _Tasks:_
      - El listado se insertará dentro de una sección de la página en el componente App.
      - Al leer el listado se insertará el nombre de la emisora y el icono `IoPlay` de la librería `react-icons/io5`
      - Asociar al evento onClick del icono `IoPlay` una función anónima que, a su vez, invoque una función `playRadio`.
      - Si el array está vacío, porque no hay ninguna emisoara se debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda".
### Iteración 5: Función playRadio
   _Tasks:_
      - La función recibe por parámetro un objeto radio (cada uno de los elementos del resultado de la búsqueda)
      - Instancia un objeto `Audio` (https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) pasando la url de la emisora de radio.
      - Invoca al método play del objeto.
### Iteración 6: Estilos
  _Tasks:_
      - Dale estilos a la aplicación utilizando algún framework de estilos para React.
### Iteración 7: Refactorizar
  _Tasks:_
      - Lleva los componentes buscador y elementos de la búsqueda a dos componentes `Search` y `ListItem` 
      - Pasa los métodos y los estados desde el componente App.
