import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3>
                I am {person.name}. My ID is {person.id} and I am from {person.practice}
            </h3>
        </div>
    )
}

export default Person