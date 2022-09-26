import React from "react";
import maritime2 from "../images/femmes_enceinte/maritime2.jpg";
import plateau from "../images/femmes_enceinte/plateau.png";
import centrale from "../images/femmes_enceinte/centrale.jpg";
import kara from "../images/femmes_enceinte/kara.png";
import dapaong from "../images/femmes_enceinte/dapaong.png";
import { Link } from "react-router-dom"

// importation des images

function Network() {

    return (
        <div >

            {/* page traitant des zones de nos activités */}

            {/* premiere section traitant du heading */}
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>

                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>Notre Réseau</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Notre Réseau
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la premiere section */}

            {/* debut de la section montrant les differentes regions */}
            <section className="section bg-c-light mt-5">
                <div className="container">
                    <h4 className="main-heading">Notre Réseau</h4>
                    <div className="underline "></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p className="mb-5 text-network" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                Des études menées par certains journaux et magazine montre que de nos jours les familles monoparentales
                                est plus que jamais une réalités et dont le taux ne cesse d'augmenter pour plusieurs raisons. Alors notre réseau va de lomé à cinkassé.
                                Autrement dit, notre missions va couvrir les cinq régions du Togo : <b>La région des savanes, la région de la kara, la région de la
                                    centrale, la région des plateaux et la région maritime.</b> <br /> Mais dans un premier temps au vu du nombres sans cesses croissant
                                des jeunes mères célibataires dans la capitale togolaise, c'est-à-dire à lomé, nos activités vont se centrer dans la capitale et ses environs
                                et par la suite s'étendre sur toute l'étendue du térritoire nationale.

                            </p>
                        </div>
                    </div>
                    <div className="container ms-auto mb-5 network-title">
                        <div className="row row-cols-1 row-cols-md-3 g-4 mb-3 d-flex">
                            <div className="col-md-2">
                                <div className="card shadow">
                                    <img src={maritime2} className="card-img-top mb-3 shadow w-100" alt="..." />
                                    <div className="color "></div>
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#F46A21", fontFamily: "roboto slab", fontWeight: "bolder" }}> REGION MARITIME</h5>                                      
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card shadow">
                                    <img src={plateau} className="card-img-top mb-3 shadow w-100" alt="..." />
                                    <div className="color"></div>
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#F46A21", fontFamily: "roboto slab", fontWeight: "bolder" }}>  REGION PLATEAUX</h5>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card shadow">
                                    <img src={centrale} className="card-img-top mb-3 shadow w-100" alt="..." />
                                    <div className="color"></div>
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#F46A21", fontFamily: "roboto slab", fontWeight: "bolder" }}> REGION CENTRALE</h5>
                                    </div>                                  
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card shadow">
                                    <img src={kara} className="card-img-top mb-3 shadow w-100" alt="..." />
                                    <div className="color"></div>
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#F46A21", fontFamily: "roboto slab", fontWeight: "bolder" }}> REGION KARA</h5>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card shadow">
                                    <img src={dapaong} className="card-img-top mb-3 shadow w-100" alt="..." />
                                    <div className="color"></div>
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#F46A21", fontFamily: "roboto slab", fontWeight: "bolder" }}> REGION  SAVANES</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* fin de la section */}

            {/* debut de la petite section renvoyant a la apge de soummission */}
            <section className="give">
                <div className="region  text-center" >
                    <p>
                        <h3 className="maritime" style={{ color: "white", fontFamily: "roboto slab" }}>Avez-vous besoin d'être écouté ?</h3>
                    </p>
                    <Link to="/submitPage" style={{ color: "#F46A21" }} className="btn bg-light shadow">Contactez nous</Link>
                </div>
            </section>

            {/* fin de la petite section et de la section notre reseau */}
        </div>
    );

}

export default Network;