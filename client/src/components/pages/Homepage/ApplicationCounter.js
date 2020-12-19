import React from "react"
import styled from "styled-components"

const dummyData = {
    dailyTarget: 4,
    dailyLeft: 4
}

const ApplicationCounter = (props) => {
    return (
        <div>
            <h1>Daily Target: {dummyData.dailyTarget} Jobs</h1>
            <h2> {dummyData.dailyLeft} Jobs Left</h2>
        </div>
    )
}

export default ApplicationCounter