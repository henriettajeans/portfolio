import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Nav } from './components/nav/nav';
import { myProjects } from './models/projectsSing';


export type ProjectContext = {
  projects: myProjects[];
};

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <Outlet></Outlet>
    <Footer/>
    </>
  );
}

export default App;
