import React from "react" 
import styled from "styled-components"

import {PageContainer} from "../../base-components/Utilities"

import ApplicationCounter from "./ApplicationCounter"
import JobPicker from "./JobPicker"


const Homepage = () => {
    return (
        <>
            <ApplicationCounter />
            <JobPicker />
        </>
    )
}

export default Homepage