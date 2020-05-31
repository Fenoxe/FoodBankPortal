import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
})

class LoginComponent extends Component {

    state = {

        username: "",
        password: ""

    }

    componentDidMount() {
        const { from } = this.props.location.state || { from: { pathname: "/" } }
        const pathname = from.pathname
        window.localStorage.setItem("redirectUrl", pathname)
    }

    handleChange = (event) => {

        const field = event.target.name
        const value = event.target.value

        console.log(field, value)

        this.setState({
            [field]: value
        })

    }

    handleSubmit = (event) => {

        console.log(event)

        axios.post('/login', {
            username: this.state.username,
            password: this.state.password,
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {

        const { classes } = this.props

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="username"
                        autoFocus
                        value={ this.state.username }
                        onChange={ this.handleChange }
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={ this.state.password }
                        onChange={ this.handleChange }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                
            </Container>
        )
    }
}

export default withStyles(styles, { withTheme: true })(LoginComponent)