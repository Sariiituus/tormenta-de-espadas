import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Redux/auth/auth.actions";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const { user } = useSelector((state) => state.auth);
  const { routes, isLoggedIn } = props;

  const dispatch = useDispatch();

  const routesToRender = isLoggedIn ? routes.routesPrivateWebsite : routes.routesPublicWebsite;

  return (
    <nav className="navBar-wrapper">
      <div className="logo-wrapper">
        <img src="./assets/icons/small-logo-white-bg.svg" className="logo" alt="" />
      </div>

      <ul className="navBar-menu">
        {routesToRender
        .filter(route => {
          if(!user) return route;
          return route.name !== "Formulario" || route.name !== "Login";
        })
        .map((route) => {
          return (
            route.name !== "Quiz" && (
              <li className="navBar-menu-item" key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )
          );
        })}
      </ul>
      {user && <button onClick={() => dispatch(logoutUser())}>Logout</button>}
    </nav>
  );
};

export default NavBar;
