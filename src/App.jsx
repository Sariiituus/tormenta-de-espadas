import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { getRoutes } from "./data/routes";
import { allData } from "./data/data";

const routes = getRoutes(
  allData.home,
  allData.info
);

const App = () => {

  let isLoggedIn = true; // TODO: Sacarlo del estado o sacarlo de redux;

  const routesToAdd = isLoggedIn ? routes.routesPrivateWebsite : routes.routesPublicWebsite;

  return (
    <div className='app'>
      <Router>
        
        <header className='app-header'>
          <NavBar routes={routes} isLoggedIn={isLoggedIn}></NavBar>
        </header>
        
        <main className='app-content'>
          <Routes>
            {routesToAdd.map((route) => {
              return <Route path={route.path} element={route.element} key={route.path} />;
            })}
          </Routes>
        </main>
        
        <footer className='app-footer'>Pie de pagina</footer>

      </Router>
    </div>
  );
}

export default App;
