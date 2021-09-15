import React from 'react'

function FactCard({fact, id, setFacts, facts}){
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
        <div>
            <img src= {fact.image} alt={id}/>
            <h2>{fact.animal}</h2>
            <p><span>Fact:</span> {fact.factoid}</p>
            <button onClick={handleDelete}>Delete Fact</button>
        </div>
    )
}

export default FactCard; 