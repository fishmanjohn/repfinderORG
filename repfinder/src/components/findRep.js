import React, { useState, useEffect } from "react";
import axios from 'axios';

 

function FindRep () {
    const [form, setform] = useState({
        adress:''
    });

    const handleChanges = e => {
        setform({
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = e =>{
        e.preventDefault();

    }

    return(
        <div>
            <form onSubmit = {handleSubmit} className = 'repForm'> 
                <input 
                name = 'adress'
                placeholder = 'Adress'
                onChange = {handleChanges}
                 />
            </form>
        </div>
    )
}
export default FindRep