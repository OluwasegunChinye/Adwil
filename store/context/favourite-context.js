import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});

// the  above ☝🏽 objects/properties are added to only help with auto-completion

function FavouritesProvider({ children }) {
    const [favouriteSongIds, setFavouriteSongIds] = useState([]);

    const findId = async () => {
        try {
            const result = await AsyncStorage.getItem('new_store');
            console.log('saved id is  :', result);
            if (result !== null) {
                setFavouriteSongIds(JSON.parse(result));
            }
        } catch (error) {}
    };

    useEffect(() => {
        findId();
    }, []);

    async function addFavourite(id) {
        setFavouriteSongIds((currentFavIds) => [...currentFavIds, id]);
        await AsyncStorage.setItem(
            'new_store',
            JSON.stringify(favouriteSongIds)
        );
    }
    function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
    }

    //Asyncstore

    const value = {
        favouriteSongIds, // choice name to use in other components : prop name as it appears here
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
