/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import './ButtonList.css'

const ButtonList = ({ handleClick, handleDoubleClick }) => {
    const state = useSelector((state) => state.pokemon)
    const { list } = state


    return (
        <>
            <div className="button-list">
            {list?.map((item, index) => {
                return(
                    <button key={index} onClick={(e) => handleClick(e, item)} 
                    onDoubleClick={handleDoubleClick}
                    >
                        {item.name}
                    </button>
                )})
            }
            </div>
        </>
    )
}

export default ButtonList