import { PropsWithChildren, createContext, useContext, useState } from "react";
import { GithubProfileSearchResults } from "../Types";

type ContextType = {
    selectedProfile:GithubProfileSearchResults[],
    selectProfile:(props:GithubProfileSearchResults) => void
}

const ProfileSelectionContext = createContext<ContextType>({
    selectedProfile:[],
    selectProfile:()=>{}
});

export const useSelectProfile = () => {
    return useContext(ProfileSelectionContext);
}

export default function ProfileSelectionProvider({children}:PropsWithChildren){
   
    const [selectedProfile,setSelectedProfile] = useState<GithubProfileSearchResults[]>([]);
    
    const selectProfile = (props:GithubProfileSearchResults) => {
       setSelectedProfile(p => { return [...p,props]})
    }
 
   return <ProfileSelectionContext.Provider value={{
     selectedProfile,
     selectProfile
   }} >{children}</ProfileSelectionContext.Provider>
}