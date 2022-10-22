import React, {useState, useEffect,  createContext} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// User Context - Move to redux
const UserContext = createContext({user: null})
const auth = getAuth();

const UserProvider = function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState(null);
    const [inProgress, setInProgress] = useState(true);

    useEffect(() => {
        onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    const { displayName, email, accessToken }  = user;
                    setCurrentUser({ displayName, email, accessToken });
                    setInProgress(false);
                } else {
                    setInProgress(false);
                }
            }
        )
    }, []);

    
    return <UserContext.Provider value={{currentUser: currentUser, inProgress: inProgress}}>{props.children}</UserContext.Provider>
}

export default UserProvider;

export {
    UserContext
}