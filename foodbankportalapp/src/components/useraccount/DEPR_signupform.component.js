import React, { Component } from 'react'
import ConfirmPassword from './microcomponents/confirmpassword.component'
import NonProfitForm from './microcomponents/nonprofitform.component.js'
import FoodBankForm from './microcomponents/foodbankform.component'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default class SignUpForm extends Component {

    state = {
        username: "",
        password: "",
        confirmPassword: "",
        agencyType: "foodBank",
        agencyName: "",
        agencyRef: ""
    }

    handleChange = (event) => {

        const field = event.target.name
        const value = event.target.value

        this.setState({
            [field]: value
        })

    }

    handleSubmit = (event) => {

        if (this.state.password !== this.state.confirmPassword) {
            alert('passwords don\'t match!')
            return
        }

        axios.post('/signup', {
            "username": this.state.username,
            "password": this.state.password,
            "agencyType": this.state.agencyType,
            "agencyName": this.state.agencyName,
            "agencyRef": this.state.agencyRef
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <Grid
                    container
                    item
                    direction="column"
                    // justify="center"
                    // alignItems="center"
                    // style={{ minHeight: '80vh' }}
                >
                    <Grid item>
                        <TextField
                            required
                            name="username"
                            placeholder="Username"
                            label="Username"
                            type="text"
                            value={ this.state.username }
                            onChange={ this.handleChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            name="password"
                            placeholder="Password"
                            label="Password"
                            type="password"
                            value={ this.state.password }
                            onChange={ this.handleChange }/>
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            label="Confirm Password"
                            type="password"
                            value={ this.state.confirmPassword }
                            onChange={ this.handleChange }/>
                    </Grid>
                    <Grid item>
                        <ConfirmPassword
                            password={ this.state.password }
                            cPassword={ this.state.confirmPassword }/>
                    </Grid>
                    <Grid item>
                        <RadioGroup
                            name="agencyType"
                            value={ this.state.agencyType }
                            onChange={ this.handleChange }>
                            <FormControlLabel
                                control={ <Radio /> }
                                value="nonProfitAgency"
                                label="Non-Profit Agency"/>
                            <FormControlLabel
                                control={ <Radio /> }
                                value="foodBank"
                                label="Food Bank"/>
                        </RadioGroup>
                    </Grid>
                    <Grid
                        container
                        item>
                        {
                            this.state.agencyType === "nonProfitAgency"
                            ?
                            <NonProfitForm
                                agencyName={ this.state.agencyName }
                                agencyRef={ this.state.agencyRef }
                                handleChange={ this.handleChange }/>
                            :
                            <FoodBankForm
                                agencyName={ this.state.agencyName }
                                handleChange={ this.handleChange }/>
                        }
                    </Grid>
                    <input type="submit" value="Submit" />
                </Grid>
            </form>
        )
    }
}