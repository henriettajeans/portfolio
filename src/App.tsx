import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/nav/nav';
import { Projects } from './components/projects/projects';

function App() {
  return (
    <>
    <Nav/>
    <Projects/>
    <Outlet></Outlet>
    </>
  );
}

export default App;
