import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="containerNavbar">
        <NavLink to="/">Home |</NavLink>{" "}
        <NavLink to="/favoritos">| Favoritos</NavLink>
        </div>
    );
};

