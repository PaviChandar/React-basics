import React from 'react'

// const Greet = () => <h1>This is a Functional Component</h1>
const Greet = props => {

    console.log(props)
    return (
    <div>
        <h2>Hello {props.name}, daughter of {props.heroName}</h2>
        {props.children}
    </div>
    )
}

export default Greet;