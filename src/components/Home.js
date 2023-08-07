import React from 'react'
import { Link } from 'react-router-dom'
import creditCard from '../images/credit_card.png'
import borrow from '../images/borrow.png'
import loans from '../images/loans.png'
import deposits from '../images/deposits.png'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
const Home = () => {
    return (
        <>
            <div className="home">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={img3} className="d-block w-100 " style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img5} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img6} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img7} className="d-block w-100" style={{ height: "284.5px" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container">
                    <hr className="hr" />
                </div>
                <div className="container features">
                    <div className="row my-3">
                        <div className="col-md-3 my-1">
                            <div className="card">
                                <img src= {creditCard} className="card-img-top" style={{ height: "70px", width: "80px", margin: "auto" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Credit Cards</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-1">
                            <div className="card">
                                <img src={borrow} className="card-img-top" style={{ height: "70px", width: "80px", margin: "auto" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Borrow</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-1">
                            <div className="card">
                                <img src={loans} className="card-img-top" style={{ height: "70px", width: "80px", margin: "auto" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Loans</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-1">
                            <div className="card">
                                <img src={deposits} className="card-img-top" style={{ height: "70px", width: "80px", margin: "auto" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">NRI Deposits</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-1 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <Link to="/" className="me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
                            <span className="text-muted">© 2023 Sahil Parashar | NIT KURUKSHETRA</span>
                        </div>
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a href="https://www.linkedin.com/in/sahil2381" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a></li>
                            <li className="ms-3"><a href="https://github.com/iamsahilparashar" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github-square"></i></a></li>
                            <li className="ms-3"><a href="https://www.instagram.com/_sahil.sharma1/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home
