import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import './App.css';
import {IoPlay} from 'react-icons/io5';

function App() {
  const [search,setSearch]=useState('');
  const [list, setList]=useState([]);
  const [playing,setPlaying]=useState(false);
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
  const playRadio=(radio:any)=>{
    console.log('playing', playing);
    let audio:any;
    if(!playing){
      audio = new Audio(radio.url);
      audio.play()};
    if(playing) audio.pause();
    console.log('audio',audio.paused);
    setPlaying(p=>!p)
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
    </section>
    <section className='station-list'>
{ list.length>0?
      <ul>
        {list.map((station:any,i) =>
          <li key={i}>{station.name}
            <IoPlay style={{cursor:'pointer'}} onClick={()=>playRadio(station)}/></li>)}
      </ul>:<p>"No se han encontrado emisoras para esta búsqueda"</p>
  }
    </section>
    </>
  );
}

export default App;
