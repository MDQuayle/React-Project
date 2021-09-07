import React from 'react'
import FactCard from './FactCard';

function FactList(facts){
    const allFacts = facts.map(fact => <FactCard fact={fact} /> )
    return (
        <div>
            {allFacts}
        </div>
    )
}

export default FactList; 