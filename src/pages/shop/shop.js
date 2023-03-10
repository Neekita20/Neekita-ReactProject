import React from 'react'
import { Card } from './Card'
import './shop.scss'
export const Shop = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..\assets\Carausel3.jpg" className="d-block w-100" alt="..." height={'550px'} />
                       
                    </div>
                    <div className="carousel-item">
                        <img src="..\assets\Carausel5.jpg" className="d-block w-100" alt="..." height={'550px'} />
                        <div class="carousel-caption">
          <h1>Art Store</h1>
          <p>Get Your Art Materials At Reasonable Prices</p>
          <h3>Contact:9818000000</h3>
        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..\assets\sale.avif" className="d-block w-100" alt="..." height={'550px'} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" fa-2xl>
                    <div className="carousel-control-prev-icon" aria-hidden="true" ></div>
                    <div className="visually-hidden" >Previous</div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <div className="carousel-control-next-icon" aria-hidden="true"></div>
                    <div className="visually-hidden">Next</div>
                </button>
            </div>
            {/* Next  */}
            <br />
            <Card />
           
            <hr />
            <h2>Get Latest on trends, best deals & exclusive offers!</h2>
            <div class="contact">
                <div class="card-header">
                   <h3>Contact Us</h3>
                   <h6>Phone:9818000000</h6>
                   <h6>Facebook:www.facebook.com/artstore</h6>
                   <h6>Instagram:www.instagram.com/artstore</h6>
                </div>
                <div class="card-body">
                    <form class="frm"> 
                        {/* <input type="email" placeholder='Enter your email' /><br /><br /> */}
                        <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                    </form>
                </div>
                <div class="card-footer text-muted">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Customer Care</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
          

        </>
    )
}
