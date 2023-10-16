/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Icon, Button} from 'semantic-ui-react';
import { removeFromFavorites, addToFavorites } from "../../Redux/favoritesSlice";
import './FavoriteButtons.css'

const FavoriteButtons = ({selectedPokemonInfo}) => {
   const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.favorites)

    const [isFavorite, setIsFavorite] = useState(false)

    const removeFavorite = item => {
        dispatch(removeFromFavorites(item?.name));
      };

      const addFavorite = item => {
        dispatch(addToFavorites(item));
      };

      useEffect(() => {
          setIsFavorite(favorites.some(favorite => favorite.name === selectedPokemonInfo.name))
      }, [favorites, selectedPokemonInfo])


    return (
        <div className="favoriteButtons">
          {selectedPokemonInfo?.name && (
          <div className="buttons">
            {isFavorite === true ? (
            <Button color="red" className="segment-btn" onClick={() => removeFavorite(selectedPokemonInfo)}>
              <Icon name="heart" />
              Remove from Favorite
            </Button>) : (
            <Button color="green" className="segment-btn" onClick={() => addFavorite(selectedPokemonInfo)}>
              <Icon name="heart" />
              Add To Favorites
            </Button>
            )}
          </div>
          )}
        </div>)
}

export default FavoriteButtons