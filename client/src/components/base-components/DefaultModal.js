import React from "react"
import styled from "styled-components"
import Modal from "react-modal"

Modal.setAppElement("#root")


const customStyles = {
    content : {
        transition: "all 1s ease-in-out"
    }
  };

const DefaultModal = (props) => <Modal {...props} style={customStyles}>{props.children}</Modal>

export default DefaultModal 