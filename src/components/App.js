import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MenuList from './MenuList';
import NavBar from "./NavBar";
 import Reservation from './Reservation'
 import Home from './Home'
 import About from './About'

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menulist" element={<MenuList />} />
        <Route path="/reservation" element={<Reservation />} />

      </Routes>
    

    </div>
  );
}

export default App;
