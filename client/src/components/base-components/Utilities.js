import React from "react"
import styled from "styled-components"

const CenteredDiv = styled.div 
`
display: flex;
justify-content: center;
`

export const CenterContainer = (props) =>  <CenteredDiv>{props.children}</CenteredDiv>

const FlexDiv = styled.div 
`
display: flex;
flex-wrap: ${props=>props.wrap ? "wrap":"nowrap"};
`

export const FlexContainer = (props) => <FlexDiv {...props}>{props.children}</FlexDiv>

const PageDiv = styled.div 
`
padding: 0 2rem;
`

export const PageContainer = (props) => <PageDiv>{props.children}</PageDiv>