/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import './ButtonList.css'
import { Button } from "semantic-ui-react"

const ButtonList = ({ handleClick, handleDoubleClick }) => {
    const state = useSelector((state) => state.pokemon)
    const { list } = state


    return (
        <>
            <div className="button-list">
            {list?.map((item, index) => {
                return(
                    <Button color="teal" key={index} onClick={(e) => handleClick(e, item)} 
                    onDoubleClick={handleDoubleClick}
                    >
                        {item.name}
                    </Button>
                )})
            }
            </div>
        </>
    )
}

export default ButtonList