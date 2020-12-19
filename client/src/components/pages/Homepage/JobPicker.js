import React from "react"
import styled from "styled-components"

import Card from "../../base-components/DefaultCard"

import {FlexContainer} from "../../base-components/Utilities"

const dummy = [
    "Job 1",
    "Job 2",
    "Job 3"
]


const JobPicker = () => {
    return (
        <>
            <h3>Get started on your daily job quota with one of your saved jobs below:</h3>
            <FlexContainer wrap={true}>
                {dummy.map((item, index)=><Card key={index}>{item}</Card>)}
            </FlexContainer>
        </>
    )
}

export default JobPicker 