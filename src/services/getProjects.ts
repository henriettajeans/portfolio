import { Octokit } from "octokit";
import { IProject } from "../models/IProjects";

const octokit = new Octokit({
    auth: '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'
  });

//   try {
//     const result = await octokit.request("GET /repos/henriettajeans/aftonqueer/issues", {
//         owner: "henriettajeans",
//         repo: "aftonqueer",
//       });
  
//     const titleAndAuthor = result.data.map((results)=>{
//         return(<> </>)
//     })
  
//     console.log({title, Author})
  
//   } catch (error) {
//     console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
//   }

  export const getProjects = async():Promise<IProject[]>=> {
    let response = await octokit.request("GET /repos/henriettajeans/aftonqueer/issues", {
                owner: "henriettajeans",
                repo: "aftonqueer",
              });
              // eslint-disable-next-line array-callback-return
              const titleAndAuthor = response.data.map((response: { data: any; })=>{
                console.log({titleAndAuthor})
                //return response.data;
            })
                  
                    
    return response.data;
 }