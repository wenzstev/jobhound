import React from "react"
import styled from "styled-components"

import SidebarButton from "./SidebarButton"

const StyledDiv = styled.div
`
position: fixed;
top: 0;
left: 0;
width: 30vw;
height: 100vh;
background-color: whitesmoke;
border-right: 2px solid lightgray;
`

const buttons = [
    "Jobs",
    "Calendar",
    "Cover Letters"
]

const SideBar = () => {
    return (
        <StyledDiv>
            {buttons.map((item, index)=><SidebarButton key={index} name={item} />)}
        </StyledDiv>

    )
}

export default SideBar 