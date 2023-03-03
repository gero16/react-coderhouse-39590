import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            <img src="./public/logito.jpg" alt="" />
   
            <ul className="d-flex flex-row">
                <li className="p-2">
                    <a href="#">Celulares</a>
                </li>
                <li className="p-2">
                    <a href="#">Noteboks</a>
                </li>
                <li className="p-2">
                    <a href="#">PCs</a>
                </li>
                <li className="p-2">
                    <a href="#">Auriculares</a>
                </li>
                <li >
                    <CartWidget />
                </li>
            </ul>

        </nav>
    )
}

export default NavBar