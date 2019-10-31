import React, { Component } from 'react';
import './Persons.css'
import Person from './Person/Person';

export default class Persons extends Component {
    constructor(props) {

        super(props);

        this.state = {
            personsData: [

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
        }

    }

    toggleEditMode = (person, newValue) => {

        this.setState({
            personsData: this.state.personsData.map(personClicked => {
                personClicked.name === person.name ?
                    personClicked.isEditMode = newValue :
                    personClicked.isEditMode = false
                return personClicked;
            }
            )
        })
    }

    deletePerson = (person) => {

        this.setState({
            personsData: this.state.personsData.filter(personClicked => {
                return personClicked.name !== person.name
            }
            )
        })
    }

    render() {
        return (

            <div className="Persons" >

                <h1>Persons</h1>
                <div className="my-persons">
                    {
                        this.state.personsData.map(person => <Person person={person} key={person.name}
                            enableEditMode={() => this.toggleEditMode(person, true)}
                            disableEditMode={() => this.toggleEditMode(person, false)}
                            deletePerson={() => this.deletePerson(person)} />)
                    }
                </div>
            </div >

        );
    }
}