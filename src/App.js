import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (  
    <section className='App'>
      <Navbar nomPagina= 'CompuHiperMegaRed'
              precios= 'Precios'
              nosotros= 'Sobre Nosotros'
              cosas = 'Cositas'/>
      
      <ItemListContainer saludos= '¡Bienvenidos!'
                         prontoAbriremos = 'Pronto Abriremos :)' />
    </section>
  );
}

export default App;
