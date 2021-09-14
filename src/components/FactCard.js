import React from 'react'

function FactCard({fact, handleDelete}, id){

    return (
        <div>
            <img src= {fact.image} alt={id}/>
            <h2>{fact.animal}</h2>
            <p><span>Fact:</span> {fact.factoid}</p>
            <button onClick={handleDelete}>Delete Fact</button>
        </div>
    )
}

export default FactCard; 