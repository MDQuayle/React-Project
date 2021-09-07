import React from 'react'

function FactCard({fact}){
    return (
        <div>
            <img src= {fact.image}/>
            Animal: {fact.animal}
            Fact: {fact.factoid}
            
        </div>
    )
}

export default FactCard; 