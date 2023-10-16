/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import './Stats.css'
import { Segment } from "semantic-ui-react"

const Stats = ({isDoubleClicked}) => {
    const state = useSelector((state) => state.pokemon)
    const { selectedPokemonInfo } = state
   
    return (
        <>
        <Segment raised className="stats">
        {isDoubleClicked ? (
            <>
            {selectedPokemonInfo && (
                <>
                <h3>{selectedPokemonInfo?.name}</h3>
            
                <h4>Abilities</h4>
                <ul>
                {selectedPokemonInfo?.abilities?.map((ability, index) => {
                    return(
                        <li key={`${ability?.ability}-${index}`}>{ability?.ability?.name}</li>
                        )})
                    }
                </ul>
            
                <h4>Type</h4>
                {selectedPokemonInfo?.types?.map((type, index) => {
                    return(
                        <p key={`${type?.type}-${index}`}>{type?.type?.name}</p>
                    )})
                }
            
                <h4>Moves</h4>
                <ul>
                {selectedPokemonInfo?.moves?.slice(0,5)?.map((move, index) => {
                    return(
                        <li key={`${move?.move}-${index}`}>{move?.move?.name}</li>
                        )})
                    }
                </ul>
                </>
                )
            }
            </>

        ) :  (
            <p>Double click on a Pokémon to display its stats</p>
        )}
        </Segment>
    </>
    )
}

export default Stats