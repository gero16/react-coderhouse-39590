
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const App = ()=> {

  return (
    <div className="App">

      <div className='container'>
        <NavBar />
        <ItemListContainer 
          greeting={"¡Bienvenido a Mercadito!"} 
        />
      </div>


    </div>
  )
}


export default App