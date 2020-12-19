import React, {useState, useEffect} from "react"

import styled from "styled-components"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Homepage from "./pages/Homepage/"
import JobsPage from "./pages/JobsPage"

import axios from "axios"

import ChangeLog from "./special-components/ChangeModal"
import Sidebar from "./special-components/Sidebar"

import {FlexContainer, PageContainer} from "./base-components/Utilities"

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
        <FlexContainer>
        <Sidebar />
        <PageContainer>
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/jobs">
            <JobsPage />
          </Route>
        </Switch>
        </PageContainer>
        </FlexContainer>

      </Router>
      <ChangeLog />
    </div>
    )
}

export default Main;
