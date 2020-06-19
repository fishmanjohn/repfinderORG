import React from React 

function FindRep () {

    return(
        <div>
            <form onSubmit = {handleSubmit} className = 'repForm'> 
                <input placeholder = 'Adress' type = 'text' />
            </form>
        </div>
    )
}
export default FindRep