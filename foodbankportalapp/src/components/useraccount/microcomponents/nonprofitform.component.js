import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const nonProfitForm = (props) => {

    return (
        <Grid
            container
            direction="column">
            <Grid item>
                <TextField
                    required
                    value={ props.agencyName }
                    name="agencyName"
                    placeholder="Agency Name"
                    label="Agency Name"
                    fullWidth
                    autoFocus
                    variant="outlined"
                    onChange={ props.handleChange }
                    margin="normal"/>
            </Grid>
            <Grid item>
                <TextField
                    required
                    value={ props.agencyRef }
                    name="agencyRef"
                    placeholder="Agency Ref #"
                    label="Agency Ref #"
                    fullWidth
                    autoFocus
                    variant="outlined"
                    onChange={ props.handleChange }
                    margin="normal"/>
            </Grid>
        </Grid>
    )
}

export default nonProfitForm