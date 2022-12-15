import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});

// the  above ☝🏽 objects/properties are added to only help with auto-completion

function FavouritesProvider({ children }) {
    const [favouriteSongIds, setFavouriteSongIds] = useState([]);

    function addFavourite(id) {
        setFavouriteSongIds((currentFavIds) => [...currentFavIds, id]);
    }
    function removeFavourite(id) {
        setFavouriteSongIds((currentFavIds) =>
            currentFavIds.filter((songId) => songId !== id)
        );
    }

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
