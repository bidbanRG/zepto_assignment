export type GithubProfileApiProps = {
    limit:number;
    page:number;
    name:string;
 }

export type GithubProfileSearchResults = {
    login:string;
    avatar_url:string;
    node_id:string;
}
