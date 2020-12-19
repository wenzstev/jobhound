import React from "react"
import styled from "styled-components"

import DefaultModal from "../base-components/DefaultModal"

const JobModal = (props) => {
    return (
        <DefaultModal>
            <h2>{props.title}</h2>
            <p>Information about the job will go here.</p>
        </DefaultModal>
    )
}