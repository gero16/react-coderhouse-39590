const Item = ({ product }) => {
    return (
        <li key={ product.id } > 
            <div className="card">
                <img className="card-img-top" src={ product.img } alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> { product.name } </h5>
                    <p className="card-text"> { product.category } </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
    )
}


export default Item