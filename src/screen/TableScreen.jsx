import React from 'react'
import Table from 'react-bootstrap/Table';

const person = [
    {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingeniería",
        hobbie: "Futbol"
    },
    {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitectura",
        hobbie: "Bajo eléctrico"
    },
    {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
    },
    {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomía"
    }

]

export const TableScreen = () => {

    return (
        <div className='tableStyle'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Carrea</th>
                        <th>Hobbie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map((person) => {
                            return (
                                <tr>
                                    <td>{person.nombre}</td>
                                    <td>{person.edad}</td>
                                    <td>{person.carrera}</td>
                                    <td>{person.hobbie}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
