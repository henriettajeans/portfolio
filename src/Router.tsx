import { createBrowserRouter } from "react-router-dom";
import { About } from "./components/about/about";
import App from "./App";
import { Home } from "./components/home/home";
import { Project } from "./components/project/project";
import { Projects } from "./components/projects/projects";
import { Resume } from "./components/resume/resume";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/project/:id',
        element: <Project />
      },
      {
        path: 'resume',
        element: <Resume />

      }

    ]
  },

])