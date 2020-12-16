import React, {useState, useEffect} from "react"

import Modal from "react-modal"

import axios from "axios"

import ChangeLog from "./ChangeModal"

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
      <h1>And now, an important message from the backend:</h1>
      <h2>{message ? message: "Loading..."}</h2>

      <ChangeLog />
    </div>
    )
}

export default Main;
