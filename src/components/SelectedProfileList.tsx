import { useSelectProfile } from "../context/ProfileSelectionContext"
import Chip from "./Chip";

export default function SelectedProfileList(){
    const {selectedProfile} = useSelectProfile();
    return <>{selectedProfile.map((props) => <Chip key={props.node_id} {...props}/>)}</>
}