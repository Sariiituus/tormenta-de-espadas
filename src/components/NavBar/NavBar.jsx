import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Redux/Logout/logout.actions";
import "./NavBar.scss";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  const { routes, isLoggedIn } = props;

  const dispatch = useDispatch();

  const routesToRender = isLoggedIn
    ? routes.routesPrivateWebsite
    : routes.routesPublicWebsite;

  return (
    <nav className='navBar-wrapper'>
      <div className='logo-wrapper'>
        <img
          src='./assets/icons/small-logo-white-bg.svg'
          className='logo'
          alt=''
        />
      </div>

      <ul className='navBar-menu'>
        {routesToRender.map((route) => {
          return (
            (route.name !== "Quiz" && 
              <li className='navBar-menu-item' key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )
          )
        })}
      </ul>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </nav>
  );
};

export default NavBar;
