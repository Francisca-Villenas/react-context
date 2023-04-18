import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Context from "./context";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => {

  const [characters, setCharacters] = useState([])
  const globalState = { characters, setCharacters }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => setCharacters(data.results.map(val => {
      return {...val,favorito:false}
    })))
  },[])

  return (
    <>
    <Context.Provider value={globalState}>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </Context.Provider>
    </>
  );
};

export default App;