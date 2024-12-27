import React, { useContext } from 'react'
import './style.css'
import logo from './shopping.webp'
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../Context/ThemeContext';
function Card() {
     
  const {color,toggleTheme}=useContext(ThemeContext);

  

  return (
    <div>
       <Form.Check 
        type="switch"
        id="custom-switch"
        label="Toggle Theme"
        onClick={toggleTheme}
      />
         <div className={color==='light'?"light-Mode":"dark-Mode"} >
             <div className='main-Container'>
                <div className='imge'>
                    <img src={logo} alt="image" className='image' />
                </div>3
                <div className={color==="light"?"description":"text"}>
                    <p>G-SHOCK GA-2100-1A1DR Black Dial Resin Strap Analog-Digital Watch - For Men G987</p>
                    <div className='icone'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star" id='star'></i>
                    </div>
                    <div className={color==="light"?"price":"text1"}>
                        <h2>$599</h2>
                        <button className='button'>Add to cart</button>
                    </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default Card
