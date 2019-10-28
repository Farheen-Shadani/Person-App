import React from 'react';
import PropType from 'prop-types';
import './Person.css'
import PersonInfo from './PersonInfo/PersonInfo';
import Card from 'react-bootstrap/Card';
import PersonEdit from './PersonEdit/PersonEdit';

export default function Person(props) {

    return (

        <Card className="Person">

            {
                props.person.isEditMode ?
                    <PersonEdit person={props.person} /> :
                    <PersonInfo person={props.person}
                        editMode={props.editMode} />
            }

        </Card>

    )
}

Person.propTypes = {
    person: PropType.object,
    editMode: PropType.func,
};