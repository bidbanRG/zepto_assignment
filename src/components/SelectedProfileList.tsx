import { GithubProfileSearchResults } from "../Types";
//import { useSelectProfile } from "../context/ProfileSelectionContext"
import Chip from "./Chip";

type Props = {
    selectedProfile: GithubProfileSearchResults[];
    onCancelProfile: (id: string) => void;
    selectLastChip: boolean;
}

export default function SelectedProfileList({ selectedProfile, onCancelProfile, selectLastChip }: Props) {

    return <>{selectedProfile.map((props, index) => 
            <Chip  key={props.node_id} 
                   {...props}
                   onCancelProfile={onCancelProfile}
                   select={selectLastChip && index === selectedProfile.length - 1}
            />
    )}
    </>
}