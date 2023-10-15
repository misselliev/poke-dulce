import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokeList } from "../Redux/pokeSlice"
import Main from "./Main/Main"
import Gallery from "./Gallery/Gallery"
import Stats from "./Stats/Stats"
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemon)
    const {status} = state


    useEffect(() => {
        if(status === 'idle') dispatch(getPokeList())
    }, [dispatch, status])

    return(
        <>
            <h1>Dulce Pokédex</h1>
            <section className="home">
                <Gallery />
                <Main />
                <Stats />
            </section>
        </>
    )
}

export default Home