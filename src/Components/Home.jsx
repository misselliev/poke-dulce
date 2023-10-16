
import DataPanel from "./DataPanel/DataPanel"
import Gallery from "./Gallery/Gallery"
import './Home.css'

const Home = () => {

    return(
        <>
            <h1>Dulce Pokédex</h1>
            <section className="home">
                <Gallery />
                <DataPanel />
            </section>
        </>
    )
}

export default Home