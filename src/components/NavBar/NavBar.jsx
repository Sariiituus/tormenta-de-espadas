import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (props) => {

    const { routes } = props;

    return (
        <nav className="NavBar-navbar">
            <ul className="NavBar-menu">
            {
                routes.map(route => {
                    return (
                        <li className="NavBar-menu-item">
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default NavBar
