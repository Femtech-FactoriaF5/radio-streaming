import './App.css';

function App() {
  return (
    <>
    <header>
      <h1>Radio Factoría!</h1>
    </header>
    <section className='search-bar'>
      <input type="text"
             placeholder='Escribe el nombre de la radio' />
      <button name="search">Buscar</button>
    </section>
    </>
  );
}

export default App;
