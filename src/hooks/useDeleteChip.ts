import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { GithubProfileSearchResults } from "../Types";

const useDeleteChip = (
    query: string,
    setSelectLastChip: Dispatch<SetStateAction<boolean>>,
    setSelectedProfile: Dispatch<SetStateAction<GithubProfileSearchResults[]>>
) => {


    const BackSpaceKeyCountRef = useRef<number>(0);
    useEffect(() => {

        const handleKeyBoardEvent = (e: KeyboardEvent) => {

            let emptyQuery = query === "";
            BackSpaceKeyCountRef.current += (e.code === 'Backspace' && emptyQuery ? 1 : 0);

            if (BackSpaceKeyCountRef.current === 1) {
                setSelectLastChip(true);
            }

            if (BackSpaceKeyCountRef.current == 2) {
                setSelectedProfile(prev => prev.slice(0, -1));
                BackSpaceKeyCountRef.current = 0;
                setSelectLastChip(false)
            }

        }
        window.addEventListener('keydown', handleKeyBoardEvent)

        return () => {
            setSelectLastChip(false);
            BackSpaceKeyCountRef.current = 0;
            window.removeEventListener('keydown', handleKeyBoardEvent)
        }

    }, [query])

}

export default useDeleteChip;