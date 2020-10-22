import React from 'react';
import './App.css';
import HomePage from './component/HomePage'
import AboutPage from './component/AboutPage';
import Header from './component/common/Header';
import Courses from './component/CoursesPage';

function App() {
  function getPage() {
    const route = window.location.pathname;
    if(route ==='/about') return <AboutPage/>
    if(route ==='/courses') return <Courses/>
    else return <HomePage/>
  }
  return (
  <div className="container-fluid">
    <Header/>
    {getPage()}
  </div>
  );
}

export default App;
