import { useContext } from 'react'
import { Result } from '../@types/result'
import { FavoriteContext } from '../contexts/FavoriteContext'
import { getSeries } from '../services/api'

export const useFavorite = () =>{
	const { favoritesKey, favoritesSerie, setfavoritesSerie,setFavoritesKey} = useContext(FavoriteContext)
	
	const toggleFavorite = (serieKey: string) =>{	
        const newFavorites : string[] = favoritesKey
        const index = newFavorites.indexOf(serieKey);
        if(index > -1)
        {
            newFavorites.splice(index, 1);
        }
        else
        {
            newFavorites.push(serieKey)
        }
        setFavoritesKey([...newFavorites])
		localStorage.setItem('favorites', JSON.stringify([...newFavorites]))
	}
    async function getFavoritesSeries ()
    {
        const resultFavorites: Result = await getSeries(undefined, 1, 15, 'title', favoritesKey.join(';'))
        setfavoritesSerie(resultFavorites)
    }

	return { favoritesKey, favoritesSerie,toggleFavorite, getFavoritesSeries}
}