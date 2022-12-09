import React, { Context, createContext, useEffect, useState } from 'react'
import { ProviderProps } from '../@types/ProviderProps'
import { Result } from '../@types/result'


type FavoriteContextType = {
    favoritesKey: string[],
    favoritesSerie: Result | null,
    setfavoritesSerie(user: Result | null): void;
    setFavoritesKey: (favoritesKey: string[]) => void
}

export const FavoriteContext: Context<FavoriteContextType> = createContext<FavoriteContextType>({} as FavoriteContextType)

export const FavoriteProvider = ({ children }: ProviderProps) => {
    const [favoritesKey, setFavoritesKey] = useState<string[]>([])

    const [favoritesSerie, setfavoritesSerie] = useState<Result | null>(null)

    useEffect(() => {
        const localFavorite = JSON.parse(localStorage.getItem('favorites') || '[]')
        setFavoritesKey(localFavorite)
    }, [])

    return (
        <FavoriteContext.Provider
            value={{
                favoritesKey,
                favoritesSerie,
                setfavoritesSerie,
                setFavoritesKey
            }}
        >
            {children}
        </FavoriteContext.Provider>
    )
}