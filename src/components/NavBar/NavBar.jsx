import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Redux/auth/auth.actions";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const { user } = useSelector((state) => state.auth);
  const { routes, isLoggedIn } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routesToRender = isLoggedIn
    ? routes.routesPrivateWebsite
    : routes.routesPublicWebsite;

  return (
    <nav className="navBar-wrapper">
      <div className="logo-wrapper">
        <img
          src="./assets/icons/small-logo-white-bg.svg"
          className="logo"
          alt=""
        />
      </div>

      <ul className="navBar-menu">
        {routesToRender
          .filter((route) => {
            if (!user) return route;
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
      {user && (
        <button className="logout-btn" onClick={() => {
        dispatch(logoutUser()); navigate('/login')}}>
          Logout
        </button>
      )}
      </ul>
    </nav>
  );
};

export default NavBar;
