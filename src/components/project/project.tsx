import { useEffect, useState } from "react";
import { IProject } from "../../models/IProjects";
import './project.scss'


export interface IProjectProps{
    project?: IProject;
}

export const Project = ((props: IProjectProps) => {
    
    return (<>
      <article className="project-component">
        <h1>This is where I display one project at a time {props.project?.name}</h1>
      <p>{props.project?.html_url}</p>

      </article>
      {console.log(props.project?.name)}
      </>
    ); }  )