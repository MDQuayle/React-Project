import React, { useState } from 'react'

function FactCard({fact, facts, setFacts}){
    const [isDeleted,setIsDeleted] = useState(true)

    function handleDelete(id) {
        fetch(`http://localhost:3000/facts/${fact.id}`, {
          method: "DELETE",
        })
            const updatedFacts = facts.filter((f) => f.id !== id);
            setFacts(updatedFacts);
            setIsDeleted(!isDeleted)
        }
        return (
        <div className= "factCard">
            <img src= {fact.image} alt="animal sounds"/>
            <h2>{fact.animal}</h2>
            <p>{fact.factoid}</p>
            <button className = "deleteButton" onClick={handleDelete}>{isDeleted ? "Delete Fact" : "Deleted"}</button>
        </div>
    )
}

export default FactCard; 