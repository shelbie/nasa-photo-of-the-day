import React, { useState, useEffect } from "react"
import axios from "axios";
import CardComponent from "./CardComponent"

function Header(props) {
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

    <div class="header-container">
        <div class="header-title">
        {/* <p>Title: {nasa.title}</p> */}
        <p>Date: {nasa.date}</p>
        </div>
    
</div>
    )
}

export default Header;