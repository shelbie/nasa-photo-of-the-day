import React, { useEffect } from "react";
import axios from "axios";
import CardComponent from "./components/CardComponent";
import Header from "./components/Header"

import "./App.css";


function App() {

//axios call
useEffect(() => {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=1bD1eIDhalvbtOKtt1tUv1gvdjCLeI3jMBaf9wH8')
  .then(res => {
  console.log(res, "Endpoint works!")
  // console.log(res.data, "res.data")
  // setNasa(res.data)
  })
  .catch(err => {
  console.log(err, "Endpoint didn't work")
  }) 
}, []);

  
  return (
 
    <div>
   <Header />
   <CardComponent />
  </div>

  )
}

export default App;
