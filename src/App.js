import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import card from "./components/card"

import "./App.css";


function App() {

const [nasa, setNasa] = useState({});
//axios call
useEffect(() => {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=1bD1eIDhalvbtOKtt1tUv1gvdjCLeI3jMBaf9wH8')
  .then(res => {
  console.log(res, "Endpoint works!")
  console.log(res.data, "res.data")
  setNasa(res.data)
  })
  .catch(err => {
  console.log(err, "Endpoint didn't work")
  }) 
}, []);

  
  return (
  
   <>
   <p>{nasa.title}</p>
   <p>{nasa.date}</p>
   <p>{nasa.explanation}</p>
   <img src={nasa.url}></img>
   </>
  );
}

export default App;
