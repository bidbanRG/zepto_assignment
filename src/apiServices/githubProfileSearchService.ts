import { useEffect, useState } from "react";
import { GithubProfileApiProps, GithubProfileSearchResults } from "../Types";


type Results = {
      data:GithubProfileSearchResults[];
      loading:boolean;
      error:Error | null;
}

export default function githubProfileSearchService({query,limit,page}:GithubProfileApiProps){
      
      const [data,setData] = useState<GithubProfileSearchResults[]>([]);
      useEffect(() => {
            
           const controller = new AbortController();
           const signal = controller.signal;
           const url = `https://api.github.com/search/users?q=${query}&per_page=${limit}&page=${page}`;
           if(query === "") {
              setData([]);
              return;
           }
      

           fetch(url,{signal})
             .then(res => res.json())
             .then((res) => {setData(res.items)})
             .catch(error => {
                  if (error.name !== 'AbortError') {
                      console.error(error.message)
                  }
              })
             

           return () => {
              controller.abort();
           }
       },[page,limit,query]);

       return data;
    

}