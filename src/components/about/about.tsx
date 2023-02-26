import { Link } from "react-router-dom"

export const About =()=>{
    return(
        <><h1>A little bit about me</h1>
        <p>A link to my resume ___</p>
        <p>My linkedin profile <Link to="https://www.linkedin.com/in/henrietta-jeansson/">right here</Link></p>
        </>
    )
}