import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import ConfirmPassword from './microcomponents/confirmpassword.component'
import NonProfitForm from './microcomponents/nonprofitform.component.js'
import FoodBankForm from './microcomponents/foodbankform.component'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // potential ie issue
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

class SignupComponent extends Component {

    state = {
        username: "",
        password: "",
        confirmPassword: "",
        agencyType: "foodBank",
        agencyName: "",
        agencyRef: ""
    }

    handleChange = (event) => {

        var field = event.target.name
        var value = event.target.value

        // if (event.type === 'radio') {
        //     field = event.target.name
        //     value = event.target.value
        // } else {
        //     field = event.target.id
        //     value = event.target.value
        // }

        console.log(event.target)
        
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

        const { classes } = this.props

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={ classes.paper }>
                    {/* <Avatar className={ classes.avatar }>
                        <LogoIcon />
                    </Avatar> */}
                    <Typography
                        align='center'
                        component='h1'
                        variant='h5'
                    >
                        Sign Up
                    </Typography>
                    <form
                        className={ classes.form }
                        component="main"
                        onSubmit={ this.handleSubmit }
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="username"
                                    placeholder="Username"
                                    label="Username"
                                    type="text"
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    value={ this.state.username }
                                    onChange={ this.handleChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="password"
                                    placeholder="Password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    value={ this.state.password }
                                    onChange={ this.handleChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    value={ this.state.confirmPassword }
                                    onChange={ this.handleChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ConfirmPassword
                                    password={ this.state.password }
                                    cPassword={ this.state.confirmPassword }
                                />
                            </Grid>
                            <RadioGroup
                                name="agencyType"
                                value={ this.state.agencyType }
                                onChange={ this.handleChange }
                            >
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={ <Radio /> }
                                        value="nonProfitAgency"
                                        label="Non-Profit Agency"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={ <Radio /> }
                                        value="foodBank"
                                        label="Food Bank"
                                    />
                                </Grid>
                            </RadioGroup>
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )    
    }
}

export default withStyles(styles, { withTheme: true })(SignupComponent)