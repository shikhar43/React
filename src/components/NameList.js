import React from 'react'
import Person from './Person';
function NameList() {
    const persons=[
        {
            id: 1,
            name: 'Thor',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Steve',
            age: 35,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Tony',
            age: 40,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person =>(
        <Person key = {person.id} person={person}></Person>
    ))
    return (
        <div>
            {
                personList
                //names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList
