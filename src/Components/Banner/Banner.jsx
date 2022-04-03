import React from 'react'
import '../Banner/Banner.css'

function Banner() {
    return (
        <div className='banner'>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    
                <div className="carousel-inner">
                   
                        <div className="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9E627noepkEV0damlLxqML3PxJzwCv6cQ_A&usqp=CAU" className="d-block w-100" alt="..." />
                            
                        </div>

                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9fbMXRJ45InhNFbykyhD1BVQJ0PIhNxxKQ&usqp=CAU" className="d-block w-100" alt="..." />
                        </div>

                </div>
               


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button className='crsl' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
        </div>


    )
}

export default Banner