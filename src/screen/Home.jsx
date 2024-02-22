import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import BackgroundVed from '../components/BackgroundVed';
import Benefits from '../components/Benefits';
import '../App.css';
import Courses from './Courses';
import MiniCourse from './MiniCourse';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Journals from './Journals';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BackgroundVed/>
      <Benefits/>
      <Courses/>
      <MiniCourse/>
      <Testimonial/>
      <Journals/>
      <Contact/>
    </div>
  )
}

export default Home
