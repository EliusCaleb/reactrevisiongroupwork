import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MenuList from './MenuList';
import NavBar from "./NavBar";
import Home from './Home';
import About from './About';
import MenuItem from "./MenuItem";
import menu from '../menu.js'


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menulist" element={<MenuList />} />
        <Route path="/menuitem/:steakId" element={<MenuItem menu={menu.steaks} />}></Route>
       

      </Routes>
    

    </div>
  );
}

export default App;
