import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../screen/Home';
import BenefitPage from '../screen/BenefitPage';
import Courses from '../screen/Courses';
import Testimonial from '../screen/Testimonial';

const Routing = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/benefits' element={<BenefitPage />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/testimonials' element={<Testimonial />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routing
