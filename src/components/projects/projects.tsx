import { useEffect, useState } from "react";
import { useNavigate, Link, useOutletContext, useParams } from "react-router-dom";
import { ProjectContext } from "../../App";
import { IProject } from "../../models/IProjects";
import { getProjects } from "../../services/getProjects";
import './projects.scss';

export const Projects=()=>{
    const [projects, setProjects] = useState<IProject[]>([]);
    const routeParams = useParams;
    const navigate =useNavigate();

    const showOneProject = () => {
        navigate(`/project/${projects}`);
      };
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
        
            <div className="myProjects--container__components" key={project.id}>
                <h1 className="myProjects--container__components__title">{project.name}</h1>
                <p><Link to={project.html_url} className="myProjects--container__components__link">{project.html_url}</Link></p>
                <span className="myProjects--container__components__created">Skapades {project.created_at}</span>
                <p className="myProjects--container__components__lang">{project.language}</p>
                <Link to ={`/project/${project.id}`} className="myProjects--container__components__btn">Check this project out</Link>

            </div>
        
        )
    });

    return(<>
    <> 
    <section className="myProjects--title">
        <h1 className="myProjects--title__text">Projects</h1>
    </section>
    <div className="myProjects--container">
    {html}
    <button onClick={showOneProject}>Kolla på ett project!</button>
    </div>
    </>
    </>);
}