// Core dependencies
import * as React from 'react';

// UI components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Static assets
import { ReactComponent as ErrorImage } from '../static/error.svg';

const Fallback = () => (
    <Grid container 
        className='fallback'
        direction="column"
        alignItems="center"
        spacing={3}
    >
        <Grid item xs={12}>
            <ErrorImage style={{maxHeight: '22rem', marginLeft: '2rem'}} />
        </Grid>
        <Grid item xs={12}>
            <Typography 
                variant="h1" 
                component="div" 
                align="center" 
                gutterBottom
            >
                Oh no!
            </Typography>
            <Typography 
                variant="h3" 
                component="div" 
                align="center" 
                color="text.secondary" 
                gutterBottom
            >
                Something went wrong
            </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
    </Grid>
);

export default Fallback;