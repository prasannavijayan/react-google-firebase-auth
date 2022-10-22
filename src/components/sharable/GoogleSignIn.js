import React from "react";
import { signInWithGoogle } from "./../../services/firebase";
import { Button } from 'react-bootstrap'

const GoogleSignIn = React.memo(function GoogleSignIn(props) {
    const googleSignIn = () => {
        signInWithGoogle()
        .catch(() => {
            console.error("Oops, something went wrong");
        })
    }
    
    return <Button
            variant='dark'
            onClick={googleSignIn}
        >
            Login with Google
        </Button>;
});

export default GoogleSignIn;