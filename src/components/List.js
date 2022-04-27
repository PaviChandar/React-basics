import React from 'react'

function List() {
    // const names = ['Pavi', 'Bari', 'Sneha']
    // const nameList = names.map(name => <h3>{name}</h3>)
    // return(
    //     <div>{nameList}</div>
    // )
    const persons = [
        {
            name : 'Pavi',
            id   :  104,
            practice : 'ORACLE'
        },
        {
            name : 'Bari',
            id   :  150,
            practice : 'LAMP'
        },
        {
            name : 'Sneha',
            id   :  138,
            practice : '.NET'
        }

    ]
    const personList = persons.map(person =>  (
    <h3>
        I am {person.name}. My ID is {person.id} and I am from {person.practice}
    </h3>
    ))

    // const personList = persons.map(person => < Person person={person} /> )  //give in return
    return <div>{personList}</div>
    
}

export default List;