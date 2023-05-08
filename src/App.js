import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});


  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
     
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

   const onPrevious = () => {
    fetchCharacters(info.prev);
   }

   const onNext = () => {
    fetchCharacters(info.next);
   }

   
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick & Morty App" />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  );
}

export default App;




// Primero, se importan tres componentes de React, "useEffect", "useState" y "React". También se importan tres componentes personalizados, "Navbar", "Characters" y "Pagination".

// Luego, se define la función principal "App". Dentro de la función, se definen dos estados utilizando el hook "useState". El primer estado, "characters", se inicializa con un arreglo vacío y se utiliza para almacenar la lista de personajes obtenida de la API. El segundo estado, "info", se inicializa con un objeto vacío y se utiliza para almacenar información adicional de la lista de personajes, como el número total de personajes y los enlaces a las páginas anterior y siguiente.

// Se define la función "fetchCharacters", que toma una URL y utiliza la función "fetch" de JavaScript para realizar una llamada a la API de Rick & Morty. Los datos se convierten a JSON y se establecen en el estado "characters" y "info" utilizando la función "setCharacters" y "setInfo", respectivamente. Si se produce un error, se registra en la consola del navegador.

// Se definen dos funciones "onPrevious" y "onNext", que llaman a la función "fetchCharacters" con la URL de la página anterior o siguiente, respectivamente. Estas funciones se utilizan como propiedades para el componente "Pagination".

// Se utiliza el hook "useEffect" para realizar una llamada a la API de Rick & Morty utilizando la función "fetchCharacters" y la URL inicial cuando se carga la página.

// Por último, se devuelve un fragmento de React que incluye el componente "Navbar", dos componentes "Pagination" y el componente "Characters". Se pasan las propiedades "characters" y "info" a "Characters" y las propiedades "prev", "next", "onPrevious" y "onNext" a los componentes "Pagination".

//============HOOKS=============
// los hooks son funciones especiales que te permiten definir y actualizar el estado y realizar acciones después de que se renderice el componente en un componente de función de React.

