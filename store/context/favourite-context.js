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

<<<<<<< HEAD
    const findId = async () => {
        const result = await AsyncStorage.getItem('new_store');
        console.log('saved id is  :', result);
        if (result !== null) {
            setFavouriteSongIds(JSON.parse(result));
=======
    // const savedSong = async () => {
    //     try {
    //         await AsyncStorage.setItem(
    //             'new_store',
    //             JSON.stringify(favouriteSongIds)
    //         );
    //     } catch (error) {}
    // };

    async function addFavourite(id) {
        const updatedSongId = (currentFavIds) => [...currentFavIds, id];
        setFavouriteSongIds(updatedSongId);
        await AsyncStorage.setItem('new_store', JSON.stringify(updatedSongId));
    }

    function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
    }

    //Asyncstore to read

    const findId = async () => {
        try {
            const result = await AsyncStorage.getItem('new_store');
            console.log('saved id is  :', result);
            if (result !== null) {
                setFavouriteSongIds(JSON.parse(result));
            }
        } catch (error) {
            console.log('error message', error);
>>>>>>> 0423edf619c1db134f2bd4e39a0eb3bc6bff91ce
        }
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

    async function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
        await AsyncStorage.setItem(
            'new_store',
            JSON.stringify(favouriteSongIds)
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
