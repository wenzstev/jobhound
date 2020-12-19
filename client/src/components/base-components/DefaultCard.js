import React from "react" 
import styled from "styled-components"

const CardDiv = styled.button 
`
border-radius: 5px;
width: 15rem;
height: 10rem;
margin: 1rem;
outline: none;
border: 1px solid darkgray;
background-color: whitesmoke;
:hover {
    background-color: cornsilk;
    cursor: pointer;
}
`

const Card = (props) => {
    return (
        <CardDiv>
            {props.children}
        </CardDiv>
    )
}

export default Card