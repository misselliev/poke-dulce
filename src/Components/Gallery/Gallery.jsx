/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useSelector } from "react-redux"
import './Gallery.css'
import Spinner from "../Spinner/Spinner"
import FavoriteButtons from "../FavoriteButtons/FavoriteButtons";
import { Segment } from "semantic-ui-react";

const Gallery = () => {
    const state = useSelector((state) => state.pokemon)
    const { status, selectedPokemonInfo } = state

    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    
    const image = selectedPokemonInfo?.sprites !==  undefined ? selectedPokemonInfo?.sprites?.other?.dream_world?.front_default : 'https://i.imgur.com/J70hE3t.png'

    
    return (
        <Segment raised className="gallery">
        {status === 'loading' ? 
            (<Spinner />) : 
            (<>
            <img className={`${isLoaded ? 'loaded' : ''}`} loading=" lazy" onLoad={handleImageLoad} src={image} alt={selectedPokemonInfo?.name}/>
            {selectedPokemonInfo?.name && (
                <FavoriteButtons selectedPokemonInfo={selectedPokemonInfo} />
            )}
            </>)
        }
        </Segment>)
}

export default Gallery