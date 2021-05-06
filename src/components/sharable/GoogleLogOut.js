import React, { useState, useEffect, useContext } from "react";
import { logOut } from "./../../services/firebase";
import { UserContext } from './../../providers/UserProvider';
import { Button } from 'react-bootstrap'
import { Redirect } from "react-router";

const GoogleLogOut = React.memo(function GoogleSignIn(props) {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(undefined);

    useEffect(() => {
        if(!user) {
            setRedirect("/login");
        }
    }, [user]);

    const googleLogout = () => {
        logOut().catch(() => {
            console.error("Oops, something is wrong");
        });
    }

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return <Button
            variant='dark'
            onClick={googleLogout}
        >
            Logout
        </Button>;
});

export default GoogleLogOut;