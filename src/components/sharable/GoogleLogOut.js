import React from "react";
import { logOut } from "./../../services/firebase";
import { Button } from 'react-bootstrap';

const GoogleLogOut = React.memo(function GoogleSignIn(props) {
    const googleLogout = () => {
        logOut().then(() => {
            window.location.href = "/login";
        })
        .catch(() => {
            console.error("Oops, something is wrong");
        });
    }

    return <Button
            variant='dark'
            onClick={googleLogout}
        >
            Logout
        </Button>;
});

export default GoogleLogOut;