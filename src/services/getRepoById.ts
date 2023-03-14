import axios from "axios";
import { IRepo } from "../models/IProjects";

interface ITempRepo {
    id: string;
}


export const GetRepoById = async (id:string): Promise<IRepo> =>{
    let response =  await axios.get<any>("https://api.github.com/users/henriettajeans/repos" );
    console.log('getrepobyid', response, id);
    return response.data.filter((repo: ITempRepo) => String(repo.id) === id)[0];

};

