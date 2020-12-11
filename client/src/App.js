import React, {useState, useEffect} from "react"


import axios from "axios"

const App = () => {
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
    </div>
    )
}

export default App;
