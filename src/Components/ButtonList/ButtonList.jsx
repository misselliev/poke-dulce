import { useDispatch, useSelector } from "react-redux"
import pokeSlice from '../../Redux/pokeSlice'
import './ButtonList.css'
import { getSpecificPokemon } from "../../Redux/pokeSlice"

const ButtonList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.pokemon)
    const { list } = state
    const { selectPokemon } = pokeSlice.actions
    

    const handleClick = (e, item) => {
        switch (e.detail) {
        case 1: {
            console.log('single click');
            dispatch(selectPokemon(item.name))
            dispatch(getSpecificPokemon(item.name))
            break;
        }
        case 2: {
            console.log('double click');
            break;
        }
        }
    }

    return (
        <div className="button-list">
        {list?.map((item, index) => {
            return(
                <button key={index} onClick={(e) => handleClick(e, item)}>
                    {item.name}
                </button>
            )
        })}
        </div>
    )
}

export default ButtonList