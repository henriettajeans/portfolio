import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { IProject } from './models/IProjects';
import { myProjects } from './models/projectsSing';


export type ProjectContext = {
  projects: myProjects[];
  showProject(p: IProject): void;
};

function App() {
  const [projects, setProjects] = useState<myProjects[]>([]);

  const showProject = (project: IProject) => {
    setProjects([...projects, new myProjects(project, project.id)]);
  };
  return (
    <>
    <Nav/>
    <Outlet context= {{ showProject }}></Outlet>
    <Footer/>
    </>
  );
}

export default App;
