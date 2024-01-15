import { GithubProfileSearchResults } from "../Types";

export default function Chip({login,avatar_url}:GithubProfileSearchResults){

  
    return <div className="h-[40px] flex bg-gray-300 items-center rounded-[40px] m-2">
         <img src={avatar_url} className="w-[40px] h-[40px] rounded-full" />
         <span className="mx-3">{login}</span>
         <span className="mr-3 cursor-pointer"> X </span>
     </div>

}