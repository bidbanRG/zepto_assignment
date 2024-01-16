import { GithubProfileSearchResults } from "../Types"

type Props = GithubProfileSearchResults & {
    onSelectProfile:(prop:GithubProfileSearchResults) => void;
}


export default function Profile({avatar_url,login,node_id,onSelectProfile}:Props){

   
    return <div className="h-[75px] w-[400px] flex bg-white items-center  mb-4 hover:bg-gray-300"
       onClick={() => onSelectProfile({avatar_url,login,node_id})}
    >
    <img src={avatar_url} className="w-[70px] h-[70px] rounded-full p-3" />
    <span className="mx-3">{login}</span>
 </div>
 }