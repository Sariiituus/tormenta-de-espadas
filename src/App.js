import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { routes } from './data/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-Header">
          <NavBar routes={routes}></NavBar>
        </header>
        <main className="App-Content">
          <Routes>
            {
              routes.map(route => {
                return (
                  <Route 
                    path={route.path}
                    element={route.element}
                  />
                )
              })
            }

          </Routes>
        </main>
        <footer className="App-Footer">Pie de pagina</footer>
      </Router>

    </div>
  );
}

export default App;
