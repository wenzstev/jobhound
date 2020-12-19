import React from "react"
import styled from "styled-components"

import SidebarButton from "./SidebarButton"

const StyledDiv = styled.div
`
top: 0;
left: 0;
width: 150px;
height: 100vh;
background-color: whitesmoke;
border-right: 2px solid lightgray;
`

const buttons = [
    "Home",
    "Jobs",
    "Calendar",
    "Cover Letters",
    "Profile"
]

const SideBar = () => {
    return (
        <StyledDiv>
            {buttons.map((item, index)=><SidebarButton key={index} name={item} />)}
        </StyledDiv>

    )
}

export default SideBar 