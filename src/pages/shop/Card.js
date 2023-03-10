import React from 'react'
import {Link} from 'react-router-dom';
import './Card.scss'
export const Card = () => {
    return <div id="carouselExample1" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card text-center mb-3">
                        <img src="..\assets\1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Canvas Set of 4</h5>
                                <p class="card-text">20% Off On Canvas!!</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\A1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Acrylic Color</h5>
                                <p class="card-text">20% Off On Acrylic Colors</p>
                               </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\W1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Watercolor Paint Set</h5>
                                <p class="card-text">10% Off On Watercolors</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                        <img src="..\assets\H1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Highlighter Pastel Colors</h5>
                                <p class="card-text">Buy 2 Get 1 Free</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\S1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Sketch Book</h5>
                                <p class="card-text">40% Off Limited Stock Only</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\B1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Professional Artist Paint Brush Set </h5>
                                <p class="card-text">Get 2 Brushes Free With the Set</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                        <img src="..\assets\H1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Highlighter Pastel Colors</h5>
                                <p class="card-text">Buy 2 Get 1 Free</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\W1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Watercolor Paint Set</h5>
                                <p class="card-text">10% Off On Watercolors</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <img src="..\assets\1.jpg" class="card-img-top" alt="..." height={'350px'}/>
                            <div class="card-body">
                                <h5 class="card-title">Canvas Set of 4</h5>
                                <p class="card-text">20% Off On Canvas!!</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}