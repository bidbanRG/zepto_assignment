export type GithubProfileApiProps = {
    limit:number;
    page:number;
    query:string;
 }

export type GithubProfileSearchResults = {
    login:string;
    avatar_url:string;
    node_id:string;
}
