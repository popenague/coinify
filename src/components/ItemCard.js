// Core dependencies
import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCard = (props) => {
    const {dish, description, measurement} = props;
    const imageUrl = `https://loremflickr.com/320/240/${dish.replace(' ', '_')}`;

    return (
        <Card>
            <CardMedia
                component="img"
                height="240"
                image={imageUrl}
                alt={''}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {dish}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {measurement}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

ItemCard.propTypes = {
    data: {
        id: PropTypes.string.isRequired
    }
};

export default ItemCard;