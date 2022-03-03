// Core dependencies
import * as React from 'react';
import PropTypes from 'prop-types';

// UI components
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';

// Branding styles
const brandColor = '#FF8200';

const brandStyle = {
    backgroundColor: brandColor,
    borderColor: brandColor,
    color: '#fff'
};

const RefreshButton = styled(Button)({
    ...brandStyle,
    fontWeight: 'bold',
    '&:hover': brandStyle
});

const BlackToolbar = styled(Toolbar)({
    backgroundColor: '#333',
    color: '#fff'
});

const Appbar = ({ onRefresh }) => (
    <AppBar position="fixed">
        <BlackToolbar>
            <PublicIcon sx={{ mr: 2, color: brandColor }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fetch &amp; Refresh
            </Typography>
            <RefreshButton onClick={onRefresh}>
                Click to refresh
            </RefreshButton>
        </BlackToolbar>
    </AppBar>
);

Appbar.propTypes = {
    onClick: PropTypes.func
};

export default Appbar;