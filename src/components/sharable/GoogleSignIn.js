import React, { useState, useEffect, useContext } from "react";
import { signInWithGoogle } from "./../../services/firebase";
import { UserContext } from './../../providers/UserProvider';
import { Button } from 'react-bootstrap'
import { Redirect } from "react-router";

const GoogleSignIn = React.memo(function GoogleSignIn(props) {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(undefined);

    useEffect(() => {
        if(user) {
            setRedirect("/main");
        }
    }, [user]);

    const googleSignIn = () => {
        signInWithGoogle().then(() => {
            setRedirect("/main");
        }).catch(() => {
            console.error("Oops, something went wrong");
        })
    }

    if (redirect) {
        return <Redirect to={redirect} />;
    }
    
    return <Button
            variant='dark'
            onClick={googleSignIn}
        >
            Login with Google
        </Button>;
});

export default GoogleSignIn;