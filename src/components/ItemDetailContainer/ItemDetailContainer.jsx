import { useEffect, useState } from "react"

import Products from "../../mocks/products"

const ItemDetailContainer = ({id, productID}) => {
    
    const [product, setProduct] = useState([])
   
    useEffect(() => {
    const product = new Promise((resolve, reject) => {
        resolve(Products)
    })

    product
        .then((response) => {
            const productSelected = response.find(
                (product) => product.id == productID 
            )
            setProduct(productSelected)
        })
        .catch((error) => console.log(error))
   }, [])


  return (
    <div className='justify-content-center'>

        <div className="card m-5" >
            <img className="card-img-top" src={product.img} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title text-center"> {product.name }</h5>
                <ul className="list-group">
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
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Categoria </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.category}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Procesador </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.procesador}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Grafica </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.grafica}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Sistema </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.sistema}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Teclado </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.teclado}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Resolucion </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.resolucion}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Procesador </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.pantalla}</p>
                            </div>
                        </div>
                    </li><li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Disco </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.disco}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col">
                                <p> Redes </p>
                            </div>
                            <div className="col">
                                <p class="card-text"> {product.redes}</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>

    </div>
  )
}


export default ItemDetailContainer