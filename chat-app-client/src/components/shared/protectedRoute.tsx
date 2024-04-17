import { useEffect , ReactElement } from "react";
// packages dependencies
import { useCookies } from "react-cookie";
// react router
import { useNavigate } from "react-router-dom";
// // redux
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/slices/userSlice";
// helpers
import callApi from "../../helpers/callApi";
// utils
import { userRoute } from "../../utils/APIRoutes";

interface Props {
    children: ReactElement;
}

const ProtectedRoute = ({ children }: Props) => {
    const [ cookies , , removeCookies ] = useCookies();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await callApi().post(userRoute , {} ,{
                    headers: {
                        authorization: cookies["chat-user"]
                    }
                });

                dispatch(setUser(res?.data.user));
                navigate("/chat")
            } catch {
                removeCookies("chat-user");
                navigate("/login");
            }
        }

        fetchUser();
    },[]);
    
    

    return (
        children
    )
}

export default ProtectedRoute;