import './App.css';
import Home from './Components/HomePage/Home';
import Destination from "./Components/Destination/Destination"
import Crew from './Components/Crew/Crew';
import Tech from './Components/Technology/Technology';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Destination" element={<Destination />}></Route>
        <Route path="/Crew" element={<Crew />}></Route>
        <Route path="/Technology" element={<Tech />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
