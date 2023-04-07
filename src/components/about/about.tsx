import { Link } from "react-router-dom"
import { VscGithubInverted } from "react-icons/vsc";
import './about.scss';

export const About = () => {
    return (
        <>
            <h1>A little bit about me</h1>
            <p>Spana in mitt cv <Link to="/resume">_här_</Link></p>
            <p>My linkedin profile <Link to="https://www.linkedin.com/in/henrietta-jeansson/">right here</Link></p>
            <p> Check out my <VscGithubInverted /></p>
        </>
    )
}