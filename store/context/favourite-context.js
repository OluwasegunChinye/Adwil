import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});


// the  above ☝🏽 objects/properties are added to only help with auto-completion

function FavouritesProvider({ children }) {
    const [favouriteSongIds, setFavouriteSongIds] = useState('');

    //Asyncstore

    function addFavourite(id) {
        setFavouriteSongIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
    }

    console.log(`store comp : ${favouriteSongIds}`);

    const value = {
        ids: favouriteSongIds, // choice name to use in other components : prop name as it appears here
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
        setFavouriteSongIds,
    };

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesProvider;
