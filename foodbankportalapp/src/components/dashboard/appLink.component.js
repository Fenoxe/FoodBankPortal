import React from 'react'
import { Link } from 'react-router-dom'

const appLink = (props) => {
    return (
        <Link to={ props.appLink }>{ props.appName }</Link>
    )
}

export default appLink