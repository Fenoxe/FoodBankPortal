import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default class WelcomeComponent extends Component {

    render() {
        return (
            <Grid
                container
                spacing={ 4 }
                direction="column"
                justify="center"
                alignItems="center"
                style={{ minHeight: '80vh' }}
            >
                <Grid item>
                    <Typography
                        align='center'
                        variant='h2'>Welcome</Typography>
                </Grid>
                <Grid
                    container item
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            component={ Link }
                            to="/signup">Sign Up</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            component={ Link }
                            to="/login">Log In</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}