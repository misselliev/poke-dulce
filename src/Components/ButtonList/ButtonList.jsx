import { useDispatch, useSelector } from "react-redux"
import pokeSlice from '../../Redux/pokeSlice'
import './ButtonList.css'

const ButtonList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemon)
    const { list } = state
    const { selectPokemon } = pokeSlice.actions

    return (
        <div className="button-list">
        {list?.map((item, index) => {
            return(
                <button key={index} onClick={() => dispatch(selectPokemon(item.name))}>
                    {item.name}
                </button>
            )
        })}
        </div>
    )
}

export default ButtonList