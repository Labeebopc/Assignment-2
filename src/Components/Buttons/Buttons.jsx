import React from 'react'
import '../Buttons/Buttons.css'

function Buttons({btn1,btn2}) {
  return (
    <div className='buttons'>
        <div className="button1">
        <button id='btn1' type="button" className="btn btn-primary">{btn1}</button>

        </div>
        <div className="button2">
        <button id='btn2' type="button" className="btn btn-primary">{btn2}</button>

        </div>
        
        

    </div>
  )
}

export default Buttons