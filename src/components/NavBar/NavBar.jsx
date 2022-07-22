import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (props) => {
  
  const { routes, isLoggedIn } = props;

  const routesToRender = isLoggedIn ? routes.routesPrivateWebsite : routes.routesPublicWebsite;

  return (
    <nav className='NavBar-navbar'>
      <ul className='NavBar-menu'>
        {routesToRender.map((route) => {
          return (
            <li className='NavBar-menu-item' key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
