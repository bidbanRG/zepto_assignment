import { GithubProfileSearchResults } from "../Types";
import { useSelectProfile } from "../context/ProfileSelectionContext";
import '../index.css'

export default function ProfileList({data}:{data:GithubProfileSearchResults[]}) {


      return <div className="bg-white w-[400px] shadow-2xl ml-2 h-[300px] overflow-y-scroll search-results"> 
              {data.map((props) =>  <SearchResults key={props.node_id} {...props}  />)} 
             </div>
     
}

const SearchResults = ({avatar_url,login,node_id}:GithubProfileSearchResults) => {

    const {selectProfile} = useSelectProfile();
   return <div className="h-[75px] w-[400px] flex bg-white items-center  mb-4 hover:bg-gray-300"
      onClick={() => selectProfile({avatar_url,login,node_id})}
   >
   <img src={avatar_url} className="w-[70px] h-[70px] rounded-full p-3" />
   <span className="mx-3">{login}</span>
</div>
}