import React from 'react'
import FactCard from './FactCard';

function FactList({facts, handleDelete}){
    const allFacts = facts.map(fact => <FactCard key = {fact.id} fact={fact} handleDelete={handleDelete}/> )
    return (
        <div>
            {allFacts}
        </div>
    )
}

export default FactList; 