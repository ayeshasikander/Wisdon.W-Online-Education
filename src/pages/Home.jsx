import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import BackgroundVed from '../components/BackgroundVed';
import Benefits from '../components/Benefits';
import '../App.css';
import Courses from './Courses';
import MiniCourse from './MiniCourse';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <BackgroundVed/>
      <Benefits/>
      <Courses/>
      <MiniCourse/>
      <Testimonial/>
    </div>
  )
}

export default Home
