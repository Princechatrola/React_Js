import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {

    return (
        <nav>

            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/about">
                About
            </NavLink>

            <Link to="/contact">
                Contact
            </Link>

        </nav>
    );
}

export default Navbar;