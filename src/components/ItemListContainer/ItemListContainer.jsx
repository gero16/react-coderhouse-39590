import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Products from "../../mocks/products"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting, category}) => {
    const [products, setProducts] = useState([])
   
    let { id } = useParams();

   useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Products), 2000)
       
    })

    productsPromise
        .then((response) => {
            if(!id) {
                setProducts(response)
            } else {
                const productsFiltered = response.filter(product => product.category === id)
                setProducts(productsFiltered) 
            }
        })
        .catch((error) => console.log(error))
   }, [id])

    return (
        <>
            <h1 className="titulo"> { greeting } </h1>

            <ItemList products={products} /> 
        </> 
 
    )
}

export default ItemListContainer