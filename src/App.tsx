import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [search,setSearch]=useState('');
  const [list, setList]=useState([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement> /* Forma elegante de tipar el elemento */)=>{
    // forma cutre de tipar el elemento input
    // setSearch((e.target as HTMLInputElement).value);
    setSearch(e.target.value);
  };
  const getStations = ()=>{
    const url = `http://95.179.139.106/json/stations/search?name=${search}`;
    axios.get(url)
      .then(result=> {
        console.log(result.data);
        setList(result.data)} )
      .catch(error=>console.error(error))
    // console.log('hola')
  }
  return (
    <>
    <header>
      <h1>Radio Factoría!</h1>
    </header>
    <section className='search-bar'>
      <input type="text"
             placeholder='Escribe el nombre de la radio'
             value={search}
             onChange={handleChange} />
      <button name="search"
              onClick={getStations}>Buscar</button>
      {search}
    </section>
    </>
  );
}

export default App;
