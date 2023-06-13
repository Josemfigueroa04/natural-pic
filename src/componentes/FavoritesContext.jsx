import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    const addFavorites = (foto) => {
        setFavorites([...favorites, foto]);
    };
    
    const removeFavorites = (fotoId) => {
        setFavorites(favorites.filter(foto => foto.id !== fotoId));
    };
    
    
    return (
        <FavoritesContext.Provider
        value={{ favorites, addFavorites, removeFavorites }}
        >
        {children}
        </FavoritesContext.Provider>
    );
    }