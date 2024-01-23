import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BenefitPage from './pages/BenefitPage';
import Courses from './pages/Courses';


const App=()=>{

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/benefits' element={<BenefitPage />} />
        <Route exact path='/courses' element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

