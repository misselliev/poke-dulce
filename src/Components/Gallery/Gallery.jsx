import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSpecificPokemon } from "../../Redux/pokeSlice"
import './Gallery.css'
import Spinner from "../Spinner/Spinner"

const Gallery = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemon)
    const { selected, status } = state
   

    useEffect(() => {
        if(selected !== null) dispatch(getSpecificPokemon(selected))
    }, [dispatch, selected])

    const image = selected !==  null ? selected?.sprites?.other?.dream_world?.front_default : 'https://i.imgur.com/J70hE3t.png'

    return (
        <>
        {status === 'loading' && <Spinner />}
        {status !== 'loading' && <img loading=" lazy" src={image}/>}
        </>
    )
}

export default Gallery