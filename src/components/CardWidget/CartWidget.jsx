import carrito from "../../assets/carrito-de-compras.png"

const CartWidget = () => {
    return (
        <div className="d-flex">
            <img src={carrito} alt="Imagen del Carrito de Compras" className='carrito-logo'></img>
            <span className="contador-productos"> 0 </span>
        </div>
    )
}

export default CartWidget