import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SocialImpact from './Components/SocialImpact';
import Invest from './Components/Invest';
import About from './Components/About';
function App() {
  return (
    <Router>
      <Routes>
            <Route path='/' element={<SocialImpact />} />
            <Route path='about' element={<About/>}></Route>
            <Route path='/invest' element={<Invest />} />
      </Routes>
    </Router>
  );
}
export default App;