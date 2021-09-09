import React, { useEffect, useState } from 'react'


function FactForm() {

function handleSubmit(){

}
function handleChange(){

}
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    Animal:
                    <input type = 'text' value = {animal} onChange = {handleChange}/>
                </label>
                <label>
                    Fact:
                    <input type = 'text' value = {factoid} onChange = {handleChange}/>
                </label>
                <label>
                    Image URL:
                    <input type = 'text' value = {image} onChange = {handleChange}/>
                </label>
            </form>
        </div>
    )
}

export default FactForm; 