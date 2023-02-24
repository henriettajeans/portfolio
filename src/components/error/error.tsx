import { Link } from "react-router-dom"

export const Error =()=>{
    return(<div>
        <h1>404</h1>
        <h4>I'm sorry, this page does not exist. </h4>
        <p>Click<Link to="{<Home/>}"> here </Link>come back to my projects 🕯️</p>
        </div>
    )
}