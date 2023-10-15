/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import './Gallery.css'
import Spinner from "../Spinner/Spinner"

const Gallery = () => {
   
    const state = useSelector((state) => state.pokemon)
    const { status, selectedPokemonInfo } = state
    
    const image = selectedPokemonInfo?.sprites !==  undefined ? selectedPokemonInfo?.sprites?.other?.dream_world?.front_default : 'https://i.imgur.com/J70hE3t.png'

    return (
        <>
        {status === 'loading' ? 
            (<Spinner />) : 
            (<img loading=" lazy" src={image}/>)
        }
        </>
    )
}

export default Gallery