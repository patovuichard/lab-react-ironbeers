import './App.css';
import { Route, Routes } from "react-router-dom";
// import Navbar from "./assets/components/Navbar";
import Home from './assets/pages/Home';
import Beer from "./assets/pages/Beer";
import RandomBeer from "./assets/pages/RandomBeer";
import NewBeer from "./assets/pages/NewBeer";
import Error from './assets/pages/Error';
import SingleBeer from './assets/pages/SingleBeer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/error" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
