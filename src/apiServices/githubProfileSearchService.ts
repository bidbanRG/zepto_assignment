import { useEffect, useState } from "react";
import { GithubProfileApiProps, GithubProfileSearchResults } from "../Types";



export default function githubProfileSearchService({ name, limit, page }: GithubProfileApiProps) {

   const [data, setData] = useState<GithubProfileSearchResults[]>([]);
   const [loading,setLoading] = useState<boolean>(false);
   useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
      const url = `https://api.github.com/search/users?q=${name}&per_page=${limit}&page=${page}`;

      if (name === "") {
         setData([]);
         return;
      }

      setLoading(true);

      fetch(url, { signal })
         .then(res => {
            if (res.status === 200) return res.json();
            else if (res.status === 403) throw Error('rate limit exceed refresh the page and try after some seconds');
            else throw Error('An unexpected error occured refresh the page and try again')
         })
         .then(res => { setData(res.items) })
         .catch(error => {
            if (error.name === 'AbortError') return;
            setLoading(false);
            alert(error.message);

         }).finally(() => {setLoading(false)});


      return () => {
         if (name !== "")
            controller.abort();
      }
   }, [page, limit, name]);

   return {data,loading};


}