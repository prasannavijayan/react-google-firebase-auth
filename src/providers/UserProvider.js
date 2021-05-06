import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/firebase"

// User Context - Move to redux
const UserContext = createContext({user: null})

const UserProvider = function UserProvider(props) {
    const [user, setuser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email }  = user;
                setuser({ displayName, email });
            } else {
                setuser(null);
            }
        })
    },[])
    
    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
}

export default UserProvider;

export {
    UserContext
}