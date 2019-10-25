import React from 'react';
import PropType from 'prop-types';
import './Person.css'
import PersonInfo from './PersonInfo/PersonInfo';
import Card from 'react-bootstrap/Card';
import PersonEdit from './PersonEdit/PersonEdit';

export default function Person(props) {

    return (

        <Card className="Person" style={{ width: '18rem' }}>
            {
                props.person.isEditMode ?
                    <PersonEdit person={props.person} /> :
                    <PersonInfo person={props.person} />

            }

        </Card>

    )
}

Person.propTypes = {
    person: PropType.object,
};