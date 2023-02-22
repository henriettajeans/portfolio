import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/nav/nav';
import { Projects } from './components/projects/projects';
import { IProject } from './models/IProjects';
import { myProjects } from './models/projectsSing';


export type ProjectContext = {
  projects: myProjects[];
};

function App() {
  return (
    <>
    <Nav/>
    
    <Outlet></Outlet>
    </>
  );
}

export default App;
