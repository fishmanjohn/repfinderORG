import React, { useEffect } from 'react'
import {Link , Router} from "react-router-dom"

function Navbar (){
    return(
        <div className = 'navbar'>
            <div className = 'navTitle'>
                <h1>Rep.Finder</h1>
                <h3>Get involved and make a differance</h3>
            </div>
            <a to = '/'>About</a>
            <a to = '/findrep'>Find your representative</a>
            <a to = '/letters'>Form Letters</a>
            
        </div>
    )
}
export default Navbar