import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Icon, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useFavorite } from "../../hooks/useFavorite";

type Props = {
    serieKey: string,
    onlyIcon: boolean,
}

export function FavoriteButton({ serieKey, onlyIcon = false }: Props) {
    const {favoritesKey, toggleFavorite} = useFavorite();

    const [isFavorite, setFavorite] = useState(checkFavorite(serieKey));

    function checkFavorite(serieKey: string)
    {
        if(favoritesKey.indexOf(serieKey) > -1){return true}
        else { return false}
    }

    useEffect(() => {
        setFavorite(checkFavorite(serieKey))
    }, [favoritesKey])

    if (onlyIcon) {
        return (
            <IconButton color='primary'>
                <Icon>{isFavorite ? <Favorite /> : <FavoriteBorder />}</Icon>
            </IconButton>
        )
    }
    else {
        return (
            <Button onClick={() => toggleFavorite(serieKey)} variant="outlined" sx={{ mt: 1 }} color='primary' startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}>
                {isFavorite ? <>REMOVE</> : <>ADD</>} FAVORITO
            </Button>
        )
    }
}