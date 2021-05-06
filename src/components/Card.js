import React from "react";
import styled from "styled-components";

/** Card Styler */
const CardStyled = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
`;

const CardComponent = React.memo(function CardComponent(props) {
    return <CardStyled>
        {props.children}
    </CardStyled>
});

export default CardComponent;