import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">

      <div className='container'>
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenido a Mercadito!"} />
      </div>

    </div>
  )
}


export default App
