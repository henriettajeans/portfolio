
import axios from "axios";
import { IProject } from "../models/IProjects";




  export const getProjects = async():Promise<IProject[]>=> {
    let response = await axios.get("https://api.github.com/users/henriettajeans/repos");
    return response.data;                       
}