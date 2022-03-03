// Core dependencies
import { useState, useCallback } from 'react';

// Constants
const ENDPOINT = 'https://random-data-api.com/api/food/random_food?size=16';

// Data fetch helper
const fetchData = () => {
    return fetch(ENDPOINT)
        // Extract data
        .then(res => res.json())
        // Use a fallback value (empty list)
        // to signal problems with the request
        .catch(e => console.error(e) || [])
        // Uncomment the following line to 
        // see the Fallback component :)
        // .then(() => []);
};

// The hook
const useItems = () => {
    const [items, setItems] = useState(null);
    const fetchItems = useCallback(() => fetchData().then(setItems), []);

    return [ items, fetchItems ];
};

export default useItems;
