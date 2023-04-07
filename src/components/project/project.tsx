
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRepo } from "../../models/IProjects";
import { GetRepoById } from "../../services/getRepoById";
import './project.scss'



export const Project = (() => {

  const [project, setProject] = useState<IRepo>();
  const { id } = useParams();


  useEffect(() => {
    getDataById();
  }, []);
  const getDataById = async () => {
    if (id) {
      let response = await GetRepoById(id!);
      //console.log('response in project', response)
      //if (response.project) {
      //setProject(response.project);
      //}
      setProject(response);
    }
  }
  return (<>
    <article className="project-component">
      <h1 className="project-component__title">{project?.name}</h1>
      <div className="project-component__flex">
        <span className="project-component__flex__date">{project?.created_at}</span>
        <p className="project-component__flex__url">{project?.html_url}</p>
        <p className="project-component__flex__desctitle">Description of project</p>
        <p className="project-component__flex__desc">{project?.description}</p>
      </div>
    </article>
    {/* {project?.id} */}
  </>
  );
})
