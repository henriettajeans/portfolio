import { useEffect, useState } from "react";
import {  useOutletContext, useParams } from "react-router-dom";
import { ProjectContext } from "../../App";
import { IProject } from "../../models/IProjects";
import './project.scss'

// export const Project =()=>{
//     return(<>
//         <h1>This is where I display one project at a time</h1>
        
//         </>
//     );
// }

// interface IProjectProps {
//         projects: IProject[];
//         addToCart(p: IProject): void;
// }

export const Project = () => {
    const [project, setProject] = useState<IProject>()
    useOutletContext<ProjectContext>();
    
    const { id } = useParams();
    //const navigate = useNavigate();

    useEffect(() => {
        if(project) return;

        if(id) {
            console.log(id);
            
            // let p = projects.filter((p) => p.work.id === id);

            // if(p.length === 1) {
            //     setProject(p[0]);
            // }
        }
    });

    useEffect(() => {
        // Get one project
    })
    
  
    // const showMoreClick = () => {
    //   navigate(`/project/${project?.id}`);
    // };
  
    return (
      <article className="project-component"><h1>This is where I display one project at a time</h1>
      </article>
    );
  };