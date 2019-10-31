import React from 'react';
import PropType from 'prop-types';
import './PersonInfo.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function PersonInfo(props) {

    return (

        <Card.Body className="PersonInfo">

            <Card.Title>{props.person.name}, {props.person.age}</Card.Title>

            <Card.Text>{props.person.description}</Card.Text>

            <ButtonGroup className="button-group" aria-label="Basic example">

                <Button className="text-info" variant="light" onClick={props.enableEditMode}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>

                <Button className="text-danger" variant="light" onClick={props.deletePerson}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>

            </ButtonGroup>

        </Card.Body>

    )
}

PersonInfo.propTypes = {
    person: PropType.object,
    enableEditMode: PropType.func,
    deletePerson: PropType.func,
};