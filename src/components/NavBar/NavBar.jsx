import CartWidget from "../CardWidget/CartWidget"
import logo from "../../assets/logito.jpg"
import { NavLink } from "react-router-dom"


const NavBar = ({isCategory, setIsCategory,}) => {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
   
            <ul className="d-flex flex-row">
                <li className="p-2">
                    <NavLink to="/category/celulares">
                        <a href="#">Celulares</a>
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/category/notebooks">
                        <a href="#">Notebooks</a>
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/category/PC">
                        <a href="#">PCs</a>
                    </NavLink>
                </li>
                 <li className="p-2">
                    <NavLink to="/category/tablets">
                        <a href="#">Tablets</a>
                    </NavLink>
                </li>
                <li >
                    <CartWidget />
                </li>
            </ul>

        </nav>
    )
}

export default NavBar