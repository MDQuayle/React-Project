import React from 'react'

function FactCard({fact, setFacts, facts}){
    function handleDelete(id) {
        fetch(`http://localhost:3000/facts/${fact.id}`, {
          method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            const updatedFacts = facts.filter((f) => f.id !== id);
            setFacts(updatedFacts);
        
        })
    }      
    return (
        <div className= "factCard">
            <img src= {fact.image} alt="animal sounds"/>
            <h2>{fact.animal}</h2>
            <p><span>Fact:</span> {fact.factoid}</p>
            <button className = "deleteButton" onClick={handleDelete}>Delete Fact</button>
        </div>
    )
}

export default FactCard; 