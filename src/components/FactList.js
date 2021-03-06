import React from 'react'
import FactCard from './FactCard';

function FactList({facts}){   

    const allFacts = facts.map((fact) => <FactCard key = {fact.id} fact={fact} facts={facts}/> )
    return (
        <div>
            {allFacts}
        </div>
    )
}

export default FactList; 