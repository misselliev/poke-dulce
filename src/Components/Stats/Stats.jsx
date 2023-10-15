import { useSelector } from "react-redux"
import './Stats.css'

const Stats = () => {
    const state = useSelector((state) => state.pokemon)
    const { selectedPokemonInfo } = state
   


    return (
        <section className="stats">
            {selectedPokemonInfo ? (
                <>
                <h3>{selectedPokemonInfo?.name}</h3>

                {/* <h4>Height</h4>
                <p>{selectedPokemonInfo?.height}</p>
    
                <h4>Weight</h4>
                <p>{selectedPokemonInfo?.weight}</p> */}
    
                <h4>Abilities</h4>
                <ul>
                {selectedPokemonInfo?.abilities?.map((ability, index) => {
                    return(
                        <li key={`${ability-index}`}>{ability?.ability?.name}</li>
                        )})
                    }
                </ul>
    
                <h4>Type</h4>
                {selectedPokemonInfo?.types?.map((type, index) => {
                    return(
                        <p key={`${type-index}`}>{type?.type?.name}</p>
                    )})
                }
    
                <h4>Moves</h4>
                <ul>
                {selectedPokemonInfo?.moves?.slice(0,5)?.map((move, index) => {
                    console.log(move)
                    return(
                        <li key={`${move-index}`}>{move?.move?.name}</li>
                        )})
                    }
                </ul>
                </>
                ) : null}


        </section>
    )
}

export default Stats