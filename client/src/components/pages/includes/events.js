import React from "react";
import meeting1 from '../../images/femmes_enceinte/meeting1.jpg';
import meeting2 from '../../images/femmes_enceinte/meeting2.jpg';
import meeting3 from '../../images/femmes_enceinte/meeting3.jpg';


function Actu() {

    return (

        <div>
            <section className="novels mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center  mt-30">
                            <h3 className="main-heading ">
                                Actualité
                            </h3>
                            <div className="underline mx-auto font-family:poppins"></div>
                        </div>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={meeting1} className="d-block w-100" alt="..." />
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src={meeting2} className="d-block w-100" alt="..." />
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src={meeting3} className="d-block w-100" alt="..." />
                                    
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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Actu;