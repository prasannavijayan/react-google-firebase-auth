import React from "react";
import styled from "styled-components";
import GoogleSignIn from "./../components/sharable/GoogleSignIn";
import Card from "./../components/Card";
import { Redirect } from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginController = function LoginController(props) {
    return <CardContainer>
        <Card>
            <GoogleSignIn />
        </Card>
    </CardContainer>;
};

export default LoginController;