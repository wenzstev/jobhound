import React from "react"
import styled from "styled-components"

import {Link} from "react-router-dom"

const StyledButton = styled(Link) 
`
display: block;
margin: 0;
outline: 1px solid darkgray;
border-radius: 0;
border: none;
font-size: 1.5rem;
text-decoration: none;
padding: 1rem 0 1rem .5rem;
color: black;
:hover {
    background-color: darkgray;
    cursor: pointer;
}
:focus {
    background-color: lightgray;
    outline: none;
}

`

const SidebarButton = (props) => {
    return (
        <StyledButton to={props.name.toLowerCase().replace(" ", "-")}>{props.name}</StyledButton>
    )
}

export default SidebarButton 