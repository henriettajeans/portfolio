import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IProject } from "../../models/IProjects";
import { ProjectsAreLoading } from "../../models/projectsLoading";
import { myProjects } from "../../models/projectsSing";
import { getProjects } from "../../services/getProjects";
import { Project } from "../project/project";


export const Projects=()=>{
    const [projects, setProjects] = useState<IProject[]>([]);
    useEffect(() => {
        const getData = async () => {
          let projects = await getProjects();
    
          setProjects(projects);
        }

        if(projects.length === 0) {
            getData();
        }
    });

    let html = projects.map ((project) =>{
        return(
        <div className="myProjects" key={project.id}>
            <h1>{project.name}</h1>
            <p><Link to={project.html_url}>{project.html_url}</Link></p>
            <span>Skapades {project.created_at}</span>
            <p>{project.language}</p>
            <Link to ={`/project/${project.id}`}>Check this project out</Link>
        </div>
        )
    });

    return(<>
    <><h1>This is where I will display my projects</h1>
    {html}
    </>
    </>);
}