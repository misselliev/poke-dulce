import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokeList } from "../Redux/pokeSlice"
import ButtonList from "./ButtonList/ButtonList"
import Gallery from "./Gallery/Gallery"
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemon)
    const {status} = state


    useEffect(() => {
        if(status === 'idle') dispatch(getPokeList())
    }, [dispatch, status])

    return(
        <section>
            <h1>Dulce Pokédex</h1>
            <Gallery />
            <ButtonList />
        </section>
    )
}

export default Home