import React, { Component } from 'react'
import axios from 'axios'

export default class LogInForm extends Component {

    

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={ this.state.username }
                            name="username"
                            placeholder="Username"
                            onChange={ this.handleChange }/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={ this.state.password }
                            name="password"
                            placeholder="Password"
                            onChange={ this.handleChange }/>
                    </label>
                </div>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}