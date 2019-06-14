import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            {/* <h1>I'm a {props.name} and I'm {Math.floor(Math.random() * 30)} years old</h1> */}
            <h1>I'm a {props.name} and I'm {props.age} years old</h1>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;
