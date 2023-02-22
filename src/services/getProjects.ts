
import axios from "axios";
import { IProject } from "../models/IProjects";




  export const getProjects = async():Promise<IProject[]>=> {
    let response = await axios.get("https://api.github.com/users/henriettajeans/repos");
    return response.data;                       
}
            
//               try {
//     const response = await octokit.request("GET /repos/henriettajeans/aftonqueer/issues", {
//         owner: "henriettajeans",
//         repo: "aftonqueer",
//       });
  
//     const titleAndAuthor = response.data.map((apiData: any)=>{
//         return(apiData.title, apiData.author);
//     })
//     console.log({titleAndAuthor});
//     return response.data;
    
  
//   } catch (error: any) {
//     console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
//   }
                    
//     return(response.data);