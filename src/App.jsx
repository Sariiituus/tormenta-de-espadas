import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { getRoutes } from "./data/routes";
import { allData } from "./data/data";
import galleryData from "./components/Gallery/GalleryData.js"

const routes = getRoutes(
  allData.home,
  allData.info,
  galleryData,
);

function App() {

  let isLoggedIn = false; // TODO: Sacarlo del estado o sacarlo de redux;

  const routesToAdd = isLoggedIn ? routes.routesPrivateWebsite : routes.routesPublicWebsite;

  return (
    <div className='App'>
      <Router>
        <header className='App-Header'>
          <NavBar routes={routes} isLoggedIn={isLoggedIn}></NavBar>
        </header>
        <main className='App-Content'>
          <Routes>
            {routesToAdd.map((route) => {
              return <Route path={route.path} element={route.element} key={route.path} />;
            })}
            <Route path='*'><h1>Soldado, ¿te has perdido en el camino?</h1></Route>
          </Routes>
        </main>
        <footer className='App-Footer'>Pie de página</footer>
      </Router>
    </div>
  );
}

export default App;
