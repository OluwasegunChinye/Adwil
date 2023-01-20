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

    const savedSong = async () => {
        await AsyncStorage.setItem(
            'new_store',
            JSON.stringify(favouriteSongIds)
        );
    };

    function addFavourite(id) {
        setFavouriteSongIds((currentFavIds) => [...currentFavIds, id]);
        savedSong();
    }

    function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
    }

    //Asyncstore

    const findId = async () => {
        const result = await AsyncStorage.getItem('new_store');
        console.log('saved id is  :', result);
        if (result !== null) {
            setFavouriteSongIds(JSON.parse(result));
        } else if (result === null) {
            return result === 0;
        }
    };

    useEffect(() => {
        findId();
    }, []);

    // end of asyncstorage

    const value = {
        ids: favouriteSongIds, // choice name to use in other components : prop name as it appears here
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    };

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesProvider;
