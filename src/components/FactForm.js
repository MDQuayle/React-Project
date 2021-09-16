import React, { useState } from 'react'


function FactForm({newFact}) {
    const [animal, setAnimal] = useState('')
    const [factoid, setFactoid] = useState('')
    const [image, setImage] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        setAnimal('')
        setFactoid('')
        setImage('')
        fetch('http://localhost:3000/facts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({animal:animal,factoid:factoid,image:image})
        })
        newFact({animal:animal,factoid:factoid,image:image})

    }
function handleAnimalChange(e){
    setAnimal(e.target.value)
}

function handleFactoidChange(e){
    setFactoid(e.target.value)
}

function handleImageChange(e){
    setImage(e.target.value)
}
    return (
            <form onSubmit = {handleSubmit}>
                <p><label>
                    Animal:
                    <input className = "inputField" type = 'text' value = {animal} onChange = {handleAnimalChange}/>
                </label></p>
                <p><label>
                    Fact:
                    <input className = "inputField" type = 'text' value = {factoid} onChange = {handleFactoidChange}/>
                </label></p>
                <p><label>
                    Image URL:
                    <input className = "inputField" type = 'text' value = {image} onChange = {handleImageChange}/>
                </label></p>
                    <p><input className = "submitButton" type = 'submit' value= "Add my fact!"/></p>
            </form>
    )
}

export default FactForm; 