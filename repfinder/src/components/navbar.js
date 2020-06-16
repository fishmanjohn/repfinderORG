import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

function Navbar (){
    return(
        <div className = 'navbar'>
            <Link to = '/'>About.</Link>
            <Link to = '/findrep'>Find your representative</Link>
            <Link to = '/letters'>Form Letters</Link>
        </div>
    )
}