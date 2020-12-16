import React from "react"
import styled from "styled-components"

const CenteredDiv = styled.div 
`
display: flex;
justify-content: center;
`

export const CenterContainer = (props) =>  <CenteredDiv>{props.children}</CenteredDiv>
