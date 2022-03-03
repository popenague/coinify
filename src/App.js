// Core dependencies
import React, { useEffect } from 'react';

// UI components
import Box from '@mui/material/Box';

// Custom components
import Appbar from  './components/Appbar';
import ItemsGrid from './components/ItemsGrid';

// Hooks
import useItems from './hooks/useItems';

// The App
function App() {
  const [ items, fetchItems ] = useItems();

  // Initial data fetch
  useEffect(fetchItems, []);

  // Render layout
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar onRefresh={fetchItems} />
      <ItemsGrid items={items} />
    </Box>
  );
}

export default App;
