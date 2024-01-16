import { useState } from "react";
import githubProfileSearchService from "./apiServices/githubProfileSearchService"
import { GithubProfileApiProps, GithubProfileSearchResults } from "./Types";
import ProfileList from "./components/ProfileList";
import SelectedProfileList from "./components/SelectedProfileList";
import useDeleteChip from "./hooks/useDeleteChip";
import Loader from "./components/Loader";


function App() {

  const [query, setQuery] = useState<GithubProfileApiProps>({ name: '', limit: 10, page: 1 })
  const { data, loading } = githubProfileSearchService(query);
  const [selectedProfile, setSelectedProfile] = useState<GithubProfileSearchResults[]>([]);
  const [selectLastChip, setSelectLastChip] = useState(false);
  const profiles = data.filter(val => selectedProfile.find(({ node_id }) => node_id === val.node_id)?.node_id !== val.node_id);

  useDeleteChip(query.name, setSelectLastChip, setSelectedProfile);


  const onSelectProfile = (prop: GithubProfileSearchResults) => {
    setSelectedProfile(prev => { return [...prev, prop] });
  }

  const onCancelProfile = (id: string) => {
    setSelectedProfile(prev => prev.filter(data => data.node_id !== id));
  }



  return (
    <>
      <h1 className='bg-red-400 text-white text-2xl font-bold p-2'> Find GitHub Users </h1>
      <section className=" flex flex-wrap w-[80%] mx-auto border-b-2 border-blue-600">

        <SelectedProfileList selectedProfile={selectedProfile} onCancelProfile={onCancelProfile} selectLastChip={selectLastChip} />

        <div className="w-[300px]">
        
          <input className="bg-[whitesmoke] outline-none p-2 text-xl w-[400px] mx-2 mt-2"
            placeholder="search github profile"
            autoFocus
            onChange={(e) => {
              setQuery(prev => { return { ...prev, name: e.target.value } })
            }} />
          
          {profiles.length > 0 && (
            loading ?
              <Loader /> :
              <ProfileList profiles={profiles} onSelectProfile={onSelectProfile} />
          )}
        
        </div>

      </section>
    </>
  )
}



export default App
