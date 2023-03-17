import { NavLink } from "react-router-dom"

const ItemList = ({ products }) => {
 
    return (
        <div className="row">
            { products.map((product, index) => {
                return (
                    <div className="col-3" key={ product.id } > 
                        <NavLink to={`/item/${ product.id }`}>
                            <div class="card mt-3" >
                                <img class="card-img-top" src={product.img} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title"> {product.name }</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <p> Precio </p>
                                                </div>
                                                <div className="col">
                                                    <p class="card-text"> {product.price}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <p> Marca </p>
                                                </div>
                                                <div className="col">
                                                    <p class="card-text"> {product.marca}</p>
                                                </div>
                                            </div>
                                                
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <p> Color </p>
                                                </div>
                                                <div className="col"> 
                                                    <p class="card-text"> {product.color}</p>
                                                </div>
                                            </div>
                                            
                                        </li>
                
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </NavLink>
                    </div>
            
                ) 
            })}
        </div>
           
    )
}

export default ItemList