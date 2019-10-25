import React from 'react';
import './Persons.css'
import Person from './Person/Person';

export default function Persons() {

    const personsData = [

        {
            "name": "Farheen",
            "age": 24,
            "description": "Future CSS Topper",
            "isEditMode": true
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
            "isEditMode": true
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
            "isEditMode": true
        },

    ]

    return (

        <div className="Persons">

            <h1>Persons</h1>

            {
                personsData.map(person => <Person person={person} key={person.name} />)
            }

        </div >

    )
}