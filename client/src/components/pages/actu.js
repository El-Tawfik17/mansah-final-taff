import React from 'react';
import {Link} from 'react-router-dom';
import { FaHeart} from 'react-icons/fa';
import meeting1 from '../images/femmes_enceinte/meeting1.jpg';
import meeting2 from '../images/femmes_enceinte/meeting2.jpg';
import images6 from '../images/femmes_enceinte/images6.jpg';
import meeting3 from '../images/femmes_enceinte/meeting3.jpg';
import rencontre from '../images/femmes_enceinte/rencontre.jpg';
import images7 from '../images/femmes_enceinte/images7.jpg';


function Novel() {

    return (
        <div className=' mt-2'>

            {/* section premiere traitant du heading */}
            <section className="py- blog" style={{ background: "#0072BE", color: "white" }}>

                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>BLOG</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Actualités
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la section */}

            {/* debut de la section montrant les actualités  */}
            <section className="section bg-c-light mt-5 blog-card">
                <div className="container">
                    <h5 className="main-heading">Nos Actualités</h5>
                    <div className="underline "></div>
                </div>
                <div className="container mx-auto mt-4">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={meeting2} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mb-2" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>FORUM INTERNATIONAL</h5>
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>Formations et échange</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Ce forum a essentiellement tourné autour de trois axes principaux à savoir...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={images6} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>VISITE D'UN CENTRE </h5>
                                    <h6 className="card-subtitle mb-2 text-muted"style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>Centre de formation des femmes</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Visite rendu a une association de femme, qui oeuvre pour l'engagement professionnel ...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={meeting3} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>CONFERENCE SOUS-REGIONALE</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>La futur mère instable</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Les causes et approches de solution en vu de palier à ...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={rencontre} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>SENSIBILISATION</h5>
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>Echanges avec les femmes</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Nous avons échangés avec les femmes à propos du futur de leurs jeunes filles et ...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={images7} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>RENCONTRE </h5>
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>Futures mères et mères en formation</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Etant l'un des objectifs majeur de notre fondation ...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 ">
                            <div className="card shadow" style={{ width: "100%" }}>
                                <img src={meeting1} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}>ENGAGEMENT AUPRES DES FEMMES</h5>
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "15px" }}>Entrepreunariat:Accompagnement des femmes</h6>
                                    <p className="card-text" style={{  fontSize: "19px", fontFamily: "poppins" }}>Bénéficiaire de notre ...</p>
                                    <Link to="/" className="btn btn button" style={{ background: "#0072BE", color: "white" }}>Lire plus</Link>
                                    <button className=' btn bg-C-light shadow submit ms-3'  style={{ color: "red" }}><FaHeart size="18px" color="red"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* fin de la section */}
        </div>
    );

}

export default Novel;