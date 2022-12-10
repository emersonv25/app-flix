import { useContext } from 'react'
import { Result } from '../@types/result'
import { FavoriteContext } from '../contexts/FavoriteContext'
import { getSeries } from '../services/api'

export const useFavorite = () =>{
	const { favoritesKey, favoritesResult, setfavoritesResult,setFavoritesKey} = useContext(FavoriteContext)
	
	const toggleFavorite = (serieKey: string) =>{	
        const newFavorites : string[] = JSON.parse(localStorage.getItem('favorites') || '[]')
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
    async function getfavoritesResult (currentPage: number = 1, pageSize: number = 15, sort = 'title')
    {
        if(favoritesKey.length > 0)
        {
            const resultFavorites: Result = await getSeries(undefined, currentPage, pageSize, sort, favoritesKey.join(';'))
            setfavoritesResult(resultFavorites)
        }
    }

	return { favoritesKey, favoritesResult,toggleFavorite, getfavoritesResult}
}