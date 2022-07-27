import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { getRoutes } from "./data/routes";
import { allData } from "./data/data";
import galleryData from "./components/Gallery/GalleryData.js";
import CharacterProfile from "./components/CharacterProfile/CharacterProfile";
import { useSelector } from "react-redux";

const routes = getRoutes(
  allData.home,
  allData.info,
  galleryData,
  CharacterProfile
);

const App = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  const routesToAdd = isLoggedIn
    ? routes.routesPrivateWebsite
    : routes.routesPublicWebsite;

  return (
    <div className='app'>
      <Router>
        <header className='app-header'>
          <NavBar routes={routes} isLoggedIn={isLoggedIn}></NavBar>
        </header>

        <main className='app-content'>
          <Routes>
            {routesToAdd.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              );
            })}
          </Routes>
        </main>

        <footer className='app-footer'>
          <p className='copyright'>© </p>
          <p className='footer-link first-link'>Cookies</p>
          <p className='footer-link'>Aviso legal</p>
          <p className='footer-link'>Política de privacidad</p>
          <p className='footer-link'>Condiciones de uso en RR.SS</p>
          <p className='footer-link'>Política de Privacidad en RR.SS</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
