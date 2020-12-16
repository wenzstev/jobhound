import React from "react"
import styled from "styled-components"

const StyledButton = styled.button
`
padding: 1rem;
border-radius: 10%;
background-color: gold;
border: none;
transition: all .2s ease-in-out;
:hover{
    background-color: goldenrod;
    cursor: pointer;
}
`

const DefaultButton = (props) =>{
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}

export default DefaultButton