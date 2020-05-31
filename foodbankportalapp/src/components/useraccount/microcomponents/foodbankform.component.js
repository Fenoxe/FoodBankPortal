import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const foodBankForm = (props) => {

    return (
        <Grid
            item
            container
            direction="column"
            >
            <Grid item>
                <TextField
                    required
                    name="agencyName"
                    label="Agency Name"
                    value={ props.agencyName }
                    placeholder="Agency Name"
                    fullWidth
                    autoFocus
                    variant="outlined"
                    onChange={ props.handleChange }
                    margin="normal"/>
            </Grid>
        </Grid>
    )
}

export default foodBankForm