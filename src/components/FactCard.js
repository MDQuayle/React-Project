import React from 'react'

function FactCard({fact}){
    return (
        <div>
            <img src= {fact.image} alt="animal"/>
            <h2>{fact.animal}</h2>
            <p><span>Fact:</span> {fact.factoid}</p>
            
        </div>
    )
}

export default FactCard; 