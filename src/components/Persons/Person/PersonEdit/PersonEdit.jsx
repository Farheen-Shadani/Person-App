import React from 'react';
import PropType from 'prop-types';
import './PersonEdit.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function PersonEdit(props) {

    return (
        <Card.Body className="PersonEdit">

            <Card.Title>Edit Person</Card.Title>

            <Card.Text>

                <input value={props.person.name} />
                <input type="number" value={props.person.age} />
                <textarea>{props.person.description}</textarea>

            </Card.Text>

            <ButtonGroup className="button-group" aria-label="Basic example">

                <Button className="text-info" variant="light">
                    <FontAwesomeIcon icon={faCheck} />
                </Button>

                <Button className="text-danger" variant="light">
                    <FontAwesomeIcon icon={faTimes} />
                </Button>

            </ButtonGroup>

        </Card.Body>
    )
}

PersonEdit.propTypes = {
    person: PropType.object,

};