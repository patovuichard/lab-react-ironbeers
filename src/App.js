import './App.css';
import { Route, Routes } from "react-router-dom";
// import Navbar from "./assets/components/Navbar";
import Home from './assets/pages/Home';
import Beer from "./assets/pages/Beer";
import RandomBeer from "./assets/pages/RandomBeer";
import NewBeer from "./assets/pages/NewBeer";

function App() {
  return (
    <div className="App">

      {/* <header>
        <Navbar /> 
      </header> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={"/beers"} element={<Beer />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
