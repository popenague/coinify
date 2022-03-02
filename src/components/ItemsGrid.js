// Core dependencies
import * as React from 'react';

// UI components
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

// Custom components
import ItemCard from './ItemCard';
import Fallback from './Fallback';

const ItemsGrid = ({items}) => {

    // Were the items fetched?
    if (null === items) {
      return <CircularProgress size={60} />;
    }
  
    // Did we get any items?
    if (0 === items.length) {
      return <Fallback />;
    }
  
    // Render the items!
    return (
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid key={item.id} item xs={3}>
            <ItemCard {...item} />
          </Grid>
        ))}
      </Grid>
    );
  };

export default ItemsGrid;