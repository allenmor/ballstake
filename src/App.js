import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Odds from "./components/Odds";
import Stats from "./components/Stats";
import Predictions from "./components/Predictions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/odds' element={<Odds />}/>
        <Route path='/stats' element={<Stats />}/>
        <Route path='/predictions' element={<Predictions />}/>
      </Routes>
    </div>
  );
}

export default App;
