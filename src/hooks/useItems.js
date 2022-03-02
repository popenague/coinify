// Core dependencies
import { useState, useCallback } from 'react';

// Constants
const FALLBACK_VALUE = [];
const ENDPOINT = 'https://random-data-api.com/api/food/random_food?size=16';

// Data fetch helper
const fetchData = () => {
    return fetch(ENDPOINT)
        // Extract data
        .then(res => res.json())
        // Use a fallback value to signal problems
        .catch(e => console.error(e) && FALLBACK_VALUE)
        // "You can't always get what you want"
};

// The hook
const useItems = () => {
    const [items, setItems] = useState(null);
    const fetchItems = () => fetchData().then(setItems);

    return [ items, fetchItems ];
};

export default useItems;