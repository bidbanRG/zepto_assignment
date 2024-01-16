import { GithubProfileSearchResults } from "../Types";

type Props = GithubProfileSearchResults & {
    onCancelProfile: (id: string) => void;
    select: boolean;
}

export default function Chip({ login, avatar_url, node_id, onCancelProfile, select }: Props) {


    return <div className={`h-[40px] flex bg-gray-300 items-center rounded-[40px] m-2 ${select ? 'border-2 border-blue-500' : ''}`}>
        <img src={avatar_url} className="w-[36px] h-[36px] rounded-full" />
        <span className="mx-3">{login}</span>
        <span className="mr-3 cursor-pointer" onClick={() => onCancelProfile(node_id)} > X </span>
    </div>

}