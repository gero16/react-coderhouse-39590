

import NavBar from '../components/NavBar/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { NavLink, useParams } from 'react-router-dom';

function Item() {

  let { id } = useParams();

  return (
    <div className="App">

      <div className='container'>
        <NavBar />
        <ItemDetailContainer productID={id}/> 
      </div>

    </div>
  )
}


export default Item