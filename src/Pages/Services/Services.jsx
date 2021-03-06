import React from 'react'
import Buttons from '../../Components/Buttons/Buttons'
import '../Services/Services.css'

function Services() {
  let btnName={
    btn1 : "Check In",
    btn2 : "Generate Invoice"

  }


  return (
    <div className='services-section'>
       <div className="head">
        <div className="head-left">
          <h5 className='title'>Upcoming Service</h5>
          <p>11:55 am, 03/04/2022</p>
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

export default Services