import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getProjects } from "../services/getProjects";
import { IProject } from "./IProjects"

export const ProjectsAreLoading = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    console.log (projects);

    useEffect (() => {
        const showProjects = async () => {
            let myProjectsFromApi = await getProjects();

            setProjects(myProjectsFromApi);
        }
        const errorHtml = ()=>{
            return(
                <div className="error">Cannot show any projects :(</div>
            )
        }
        if (projects.length > 0 ? showProjects : errorHtml) return;
        //showProjects();  
    });
    let html = projects.map ((project) =>{
        return(
        <div className="myProjects" key={project.id}>
            <h1>{project.name}</h1>
            <p><Link to={project.html_url}>{project.html_url}</Link></p>
            <span>Skapades {project.created_at}</span>
            <p>{project.language}</p>
        </div>
        )
    });
    return(
    <>
        {html}
    </>)
}