import React, { useState } from 'react'

function FactCard({fact}){
    const [count, setCount] = useState(0)
    function handleUpClick(){
        setCount(count +1)
    }
    function handleDownClick(){
        setCount(count-1)
    }
        return (
        <div className= "factCard">
            <img src= {fact.image} alt="animal sounds"/>
            <h2>{fact.animal}</h2>
            <p>{fact.factoid}</p>
            <p>{count}</p>
            <button className = "upVote" onClick={handleUpClick}><span role="img" aria-label="thumbs-up">👍</span></button>
            <button className = "downVote" onClick={handleDownClick}><span role="img" aria-label="thumbs-down">👎</span></button>
        </div>
    )
}

export default FactCard; 