import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormPerson = () => {

    const [input, setInput] = useState({ name: '', lastName: '', email: '' })
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const { value, name, lastName, email } = e.target;
        const newInput = { ...input, [name]: value, [lastName]: value, [email]: value };
        setInput(newInput);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);
    }

    return (
        <div className='formStyle'>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3 formGruop" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" required maxLength={20}
                        name="name" onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 formGruop" controlId="formBasiclastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="lastname" required maxLength={20}
                        name="lastName" onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3 formGruop" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required maxLength={30}
                        name="email" onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='buttonForm'>
                    Submit
                </Button>
            </Form>
            {
               submit &&(<h2>Hola mi nombre es <span>"{input.name}" "{input.lastName}"</span> mi mail es <span>"{input.email}"</span></h2>)
            }
            
        </div>
    )
}
