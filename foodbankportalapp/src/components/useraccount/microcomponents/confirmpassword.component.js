import React from 'react'

const confirmPassword = (props) => {
    
    return (
        props.password
        &&
        props.cPassword
        &&
        props.password !== props.cPassword
        ?
        <p>Passwords don't match!</p>
        :
        <p></p>
    )
}

export default confirmPassword