import React from 'react'
import FactCard from './FactCard';

function FactList({facts, setFacts}){
    const allFacts = facts.map((fact) => <FactCard key = {fact.id} fact={fact} facts={facts} setFacts={setFacts}/> )
    return (
        <div>
            {allFacts}
        </div>
    )
}

export default FactList; 