import React, {useContext} from 'react'
import { themeContext } from '../../context'
import './Toggle.css'
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"

const Toggle = () => {
    const theme = useContext(themeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };
  return (
    <div className='t'>
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div 
        className="t-button"
        onClick={handleClick}
        style={{left: theme.state.darkMode ? 0:25}}
        >

        </div>
    </div>
  )
}

export default Toggle