import React from 'react'
import Buttons from '../../Components/Buttons/Buttons'
import '../Payments/Payments.css'

function Payments() {

  let btnName={
    btn1 : "Start a Chat",
    btn2 : "Resend Invoice"

  }
  return (
    <div className='payment-section'>
       <div className="head">
        <div className="head-left">
          <h5 className='title'>Pending Payments</h5>
          <p>04:00 pm, 03/04/2022</p>
        </div>
        <div className="head-right">
          <span className='badge rounded-pill'>1</span>
          <p>Request</p>
          <span className='badge rounded-pill'>2</span>
          <p>Service</p>
          <span className='badge rounded-pill'>3</span>
          <p>Payment</p>

        </div>
      </div>



 <Buttons {...btnName}/>
    </div>
  )
}

export default Payments