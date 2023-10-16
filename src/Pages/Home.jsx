
import DataPanel from "../Components/DataPanel/DataPanel"
import Gallery from "../Components/Gallery/Gallery"
import './Home.css'
import { Container, Header } from 'semantic-ui-react';

const Home = () => {

    return(
        <Container>
            <Header as="h1" textAlign='center' color="blue">Woof Pokédex</Header>
            <section className="home">
                <Gallery />
                <DataPanel />
            </section>
        </Container>
    )
}

export default Home