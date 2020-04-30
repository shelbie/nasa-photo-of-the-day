import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./Header";


function Card(props) {

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=1bD1eIDhalvbtOKtt1tUv1gvdjCLeI3jMBaf9wH8')
        .then(res => {
        console.log(res, "Endpoint works!")
        // console.log(res.data, "res.data")
        setNasa(res.data)
        })
        .catch(err => {
        console.log(err, "Endpoint didn't work")
        }) 
      }, []);
      
    const [nasa, setNasa] = useState(props);
    return (

    <div>
    
   <p>{nasa.explanation}</p>
   <img src={nasa.url}></img> 
</div>
    )
}

export default Card;