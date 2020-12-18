import React, {useState, useEffect} from "react"

import {BrowserRouter as Router} from "react-router-dom"

import Modal from "react-modal"

import axios from "axios"

import ChangeLog from "./special-components/ChangeModal"
import Sidebar from "./special-components/Sidebar"

axios.defaults.baseURL = "/api"


const Main = () => {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:5000/")
      .then(res=>setMessage(res.data))
      .catch(err=>console.log(err))

  }, [])

  return (
    <div>
      <Router>
      <Sidebar />
      </Router>
      <ChangeLog />
    </div>
    )
}

export default Main;
