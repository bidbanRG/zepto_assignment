import { GithubProfileSearchResults } from "../Types";
import '../index.css'
import Profile from "./Profile";

type Props = {
   profiles: GithubProfileSearchResults[];
   onSelectProfile: (prop: GithubProfileSearchResults) => void
}

export default function ProfileList({ profiles, onSelectProfile }: Props) {

   return <div className="absolute bg-white w-[400px] shadow-2xl ml-2 h-[300px] overflow-y-scroll search-results">
      {profiles.map((props) => <Profile key={props.node_id} {...props} onSelectProfile={onSelectProfile} />)}
   </div>

}

