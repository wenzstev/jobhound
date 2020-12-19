import React, {useState, useEffect} from "react"

import {useLocalStorage} from "../../useLocalStorage"

import ReactMarkdown from "react-markdown"

import DefaultButton from "../base-components/DefaultButton"
import DefaultModal from "../base-components/DefaultModal"

import {CenterContainer} from "../base-components/Utilities"

import markdown from "../../changelog/0.0.1.md"

const version = "0.0.3"



const ChangeModal = () => {
    
    const [lastAccessed, setLastAccessed] = useLocalStorage('last-accessed', 'never')

    const [isModalOpen, setModalOpen] = useState(false)

    const [modalContents, setModalContents] = useState("")

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    useEffect(()=>{
        if (lastAccessed != version){
            fetch(markdown)
                .then(response=>response.text())
                .then(text=>{
                    setModalContents(text)
                    openModal()
                    setLastAccessed(version)
                })
        }
    }, [])

    return (
        <DefaultModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            >
                <ReactMarkdown source = {modalContents} />
            
            <CenterContainer>
                <DefaultButton onClick={closeModal}>Close</DefaultButton>
            </CenterContainer>
        </DefaultModal>
    )

}

export default ChangeModal