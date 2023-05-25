// react router dom
import { useLocation } from "react-router-dom";
// routes
import { hiddenLayout } from "../routes";

const useMatch = () : boolean => {
    const path = useLocation().pathname.toLowerCase();

    return hiddenLayout.includes(path);
}

export default useMatch;