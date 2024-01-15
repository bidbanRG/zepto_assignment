import { useState } from "react";
import githubProfileSearchService from "./apiServices/githubProfileSearchService"
import './index.css';
import { GithubProfileApiProps } from "./Types";
import ProfileList from "./components/ProfileList";
import SelectedProfileList from "./components/SelectedProfileList";


function App() {
  
  const [query,setQuery] = useState<GithubProfileApiProps>({query:'',limit:10,page:1})
  const data =  githubProfileSearchService(query);
  
  return (
    <>
       <h1 className='bg-red-400 text-red-200'>hrllo</h1>
         <section className="flex flex-wrap w-[90%] mx-auto">
            
           <SelectedProfileList/>
          
           <div className="w-[120px]">
             <input className="bg-gray-300 p-2 text-xl w-[400px] mx-2 mt-2" 
              placeholder="search github profile" 
              onChange={(e) => {
               setQuery(p => {return {...p,query:e.target.value}})
             }}  />
              {data.length > 0 &&  <ProfileList data={data}/>}
           </div>
           
         </section>
      </>
  )
}



export default App
