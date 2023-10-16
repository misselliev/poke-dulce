import { useDispatch } from "react-redux"
import { useState } from "react"
import pokeSlice from '../../Redux/pokeSlice'
import './DataPanel.css'
import { getSpecificPokemon } from "../../Redux/pokeSlice"
import Stats from '../Stats/Stats'
import ButtonList from "../ButtonList/ButtonList"
import Pagination from "../Pagination/Pagination"
import { Segment } from "semantic-ui-react"

const DataPanel = () => {
    const dispatch = useDispatch()
    const [isDoubleClicked, setIsDoubleClicked] = useState(false);
    const { selectPokemon } = pokeSlice.actions
    

    const handleClick = (e, item) => {
        switch (e.detail) {
        case 1: {
            setIsDoubleClicked(false)
            dispatch(selectPokemon(item.name))
            dispatch(getSpecificPokemon(item.name))
            break;
        }
        case 2: {
            setIsDoubleClicked(true)
            break;
        }
        }
    }

    const handleDoubleClick = () => {
        setIsDoubleClicked(true)
    }

    return (
        <>
        <div className="data-panel">
            <Segment raised className="list">
                <ButtonList handleClick={handleClick} handleDoubleClick={handleDoubleClick} />
                <Pagination />
            </Segment>
            
            <Stats isDoubleClicked={isDoubleClicked} />
        </div>
        </>
    )
}

export default DataPanel