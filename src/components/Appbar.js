// Core dependencies
import * as React from 'react';
import PropTypes from 'prop-types';

// UI components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';

const Appbar = ({ onRefresh }) => (
    <AppBar position="fixed">
        <Toolbar>
            <PublicIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fetch &amp; Refresh
            </Typography>
            <Button 
                variant="outlined" 
                color="inherit"
                onClick={onRefresh}
            >
                Click to refresh
            </Button>
        </Toolbar>
    </AppBar>
);

Appbar.propTypes = {
    onClick: PropTypes.func
};

export default Appbar;