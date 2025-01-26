import AuthContext from "./authContext";
import { useContext } from "react";


const useAuth = () => useContext(AuthContext);

export default useAuth;
