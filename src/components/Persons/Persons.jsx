import React from 'react';
import './Persons.css'
import Person from './Person/Person';

export default function Persons() {

    const personsData = [

        {
            "name": "Farheen",
            "age": 24,
            "description": "Future CSS Topper",
            "isEditMode": false
        },

        {
            "name": "Nageen",
            "age": 26,
            "description": "Pharmacist",
            "isEditMode": false
        },

        {
            "name": "Uroosa",
            "age": 23,
            "description": "Doctor",
            "isEditMode": false
        },

        {
            "name": "Hira",
            "age": 24,
            "description": "Engineer",
            "isEditMode": false
        },

        {
            "name": "Mahrukh",
            "age": 20,
            "description": "Aalima",
            "isEditMode": false
        },

    ]

    const enableEditMode = () => {
        // props.person.isEditMode = true;
        alert("hello world")
    }

    return (

        <div className="Persons">

            <h1>Persons</h1>

            {
                personsData.map(person => <Person person={person} editMode={enableEditMode} key={person.name} />)
            }

        </div >

    )
}