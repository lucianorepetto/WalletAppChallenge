import React from 'react'
import './PopUp.css'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <i className='close-btn fas fa-times' style={{cursor: 'pointer', margin: '10px'}} onClick={() => props.setPopUp("")}></i>
            {props.trigger}
        </div>
    </div>
  ) : "";
}

export default PopUp