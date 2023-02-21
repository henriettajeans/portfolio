import { useEffect, useState } from "react"
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
        if (projects.length > 0) return;
        showProjects();
    });
    let html = projects.map ((project) =>{
        return(
        <div className="myProjects" key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.title}</p>
        </div>
        )
    });
    return(
    <>
        {html}
    </>)
}