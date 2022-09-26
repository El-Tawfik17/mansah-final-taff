import React from "react";
import massah from "../images/femmes_enceinte/massah.png";
import psy_femme from "../images/femmes_enceinte/psy_femme.webp";
import membre1 from "../images/femmes_enceinte/membre1.webp";
import equipe2 from "../images/femmes_enceinte/equipe2.jpg";
import conseillere_jur from "../images/femmes_enceinte/conseillere_jur.webp";
import sage_femme from "../images/femmes_enceinte/sage_femme.webp";
import equipe from "../images/femmes_enceinte/equipe.webp";
import psy from "../images/femmes_enceinte/psy.webp";
import mereenfant from "../images/femmes_enceinte/mereenfant.jpg";
import rencontre2 from "../images/femmes_enceinte/rencontre2.jpg";
import fille from "../images/femmes_enceinte/fille.jpg"
import { Link } from "react-router-dom"

function Projects() {

    return (
        <div >

            {/* premiere section de la apge nos missions traitant le heading de la page */}
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>

                <div className="container">
                    <div className="row p-3 barre">
                        <div className="col-md-4 my-auto">
                            <h4>Nos Missions</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Nos Missions
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la premiere section */}

            {/* debut de la section nos missions definissant nos activités */}
            <section className="section mission bg-c-light mt-5">
                <div className="container">
                    <h5 className="main-heading">Nos Missions</h5>
                    <div className="underline "></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-5 mission" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                La fondation Massah est née en 2022, du désir et de la vonlonté de Mlle N'DJAO Massah de venir en aide aux jeunes filles dans des conditions
                                très peu confortable,enceinte et célibataire, laissée à elles mêmes ou parfois à la charge des parents. Ceci étant, tout se passe bien pour certaines
                                d'entre elles qui bénéficient du soutien sans faille de leurs proches, soutien qui peut-être aussi bien financier,spirituel et moral. Cependnant, il y
                                a qui n'ont pas cette chance de la part de leurs proches compte tenu de certaines réalités, rendant la période pré-maternité difficile. Tout cela implique chez
                                certaines la dépression, le désespoir, les troubles mentaux mettant ainsi leur propre vie en danger et celle du bébé. C'est suite à célà qu'est née l'idée d'apporter
                                du soutien de quelque nature qu'il soit, mais surtout psychologique à ces jeunes futures mères célibataires.    <br /><br />  Quand bien même la santé mentale jeune future mère
                                est une priorité pour nous, celle des mères célibataires n'en est pas moindre pour nous même si nous ne mettons pas l'accent dessus. En effet nous prévoyons un programme de
                                soutien également aux mères célibataires. Mis à part le soutien psychologique nous avons à coeur d'accompagnez ces femmes professionnellement parlant pour un meilleur
                                épanouissement .
                            </p>
                        </div>
                    </div>
                    <div className="row p-5 shadow mt-2" style={{backgroundColor:"#0072be4d"}}>
                        <div className="col-md-4 ">
                            <img src={psy} className="card-img w-100" alt="..." />
                        </div>
                        <div className="col-md-6 align-self-end">
                            <h2 className="mt-5 title-mission" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}> SOUTIEN PSYCHOLOGIQUE</h2>
                            <p className="text-mission" style={{ fontFamily: "poppins", fontSize: "18px" }}> Nous offrons un soutien psychologique aux jeunes futures mères qui ont subi un choc émotionnel du fait de leur état et qui 
                            sombrent dans la dépression, se mettanten danger et le foeutus également. Il s'agit des moments d'échanges, d'écoutes entre le médecin psychologue et la jeune femme.</p>
                        </div>
                    </div>
                    <div className="row p-5 shadow mt-2" style={{backgroundColor:""}}>
                        <div className="col-md-4 ">
                            <img src={mereenfant} className="card-img w-100" alt="..." />
                        </div>
                        <div className="col-md-6 align-self-end">
                            <h2 className="mb-2 title-mission" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}> BIEN-ETRE MENTAL ET SUIVI</h2>
                            <p  className="text-mission" style={{ fontFamily: "poppins", fontSize: "18px" }}>  Aussi bien pendant la grossesse,qu'apres la jeune fille a toujours besoin d'être soutenu , ce sera toujours des séances
                            de partage avec le médécin psychologue, la sage-femme et l'expert en developpement personnelle en vue de redonner confiance à la mère; Ce qui va également impacter positivement 
                            le nouveau du fait que la mère confiante, offrira à celui-ci un bon épanouissementet une meilleure éducation, gage d'un monde meilleur.</p>
                        </div>
                    </div>
                    <div className="row p-5 shadow mt-2" style={{backgroundColor:"#0072be4d"}}>
                        <div className="col-md-4 ">
                            <img src={rencontre2} className="card-img w-100" alt="..." />
                        </div>
                        <div className="col-md-6 align-self-end">
                            <h2 className="mb-2 title-mission" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}> RENCONTRE ET SENSIBILISATION</h2>
                            <p className="text-mission" style={{ fontFamily: "poppins", fontSize: "18px" }}>  Organisation des campagnes de sensibilisation regroupant toutes femmes, de toute tranche d'âge
                            sur les dispositions à prendre afin d' éviter ces situations inconfortables ou du moins comment minimiser les conséquences. Aussi nous interagissons avec 
                            des ONG et associations luttant pour la cause des mères célibataires.</p>
                        </div>
                    </div>
                    <div className="row p-5 shadow mt-2" style={{backgroundColor:""}}>
                        <div className="col-md-4 ">
                            <img src={fille} className="card-img w-100" alt="..." />
                        </div>
                        <div className="col-md-6 align-self-end">
                            <h2 className="mb-2 title-mission" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "22px" }}> FORMATION ENTREPRENEURIALE ET INSERTION PROFESSIONNELLE</h2>
                            <p  className="text-mission" style={{ fontFamily: "poppins", fontSize: "18px" }}>  
                            Orientation et accompagnement de la mère célibataire dans le choix du métier qu'elle voudrait faire, formation et suivi durant la formation et insertion professionnelle
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la section nos missions */}

            {/* introduction d'une section, faisant mention de nootre équipe */}
            <section className="team bg-light border-bottom mt-5">
                <div className="container">
                <h1 className="main-heading mb-3 mt-5" >Notre Équipe</h1>
                        <div className="underline "></div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-3 mt-0 text-team" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                Afin de rendre cette mission possible, nous disposons d'une grande équipe avertie, avisée et déterminée.
                                Cela dit, nous voici en équipe restreinte
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4  ">
                                <img src={massah} className="shadow w-100" alt="..." />
                            </div>
                            <div className="col-md-6 align-self-end">
                                <h2 className=" mt-3 massah" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "20px" }}> N'DJAO Massah</h2>
                                <p  className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}> Juriste & Informaticienne <br /> Présidente fondatrice de la fondation</p>
                            </div>
                        </div>
                        <div className="underline w-100 " style={{ background: "#0072BE" }}></div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={psy_femme} className="card-img-top w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-text" style={{ color: "#0072BE", fontFamily: "roboto slab" }}> Mme MAYA Leleng</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                            Docteur psychologue et co-fondatrice de la fondation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={membre1} className="card-img-top w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab" }}> Mr ADJE Komla</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                            Technicien entrepreneur  pour l'insertion professionnelle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={equipe2} className="card-img-top w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab" }}>Mr AMA Jean-Paul</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                            Responsable Réssources humaines et suivi des bénévoles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4  mb-5">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={sage_femme} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab" }}> Mlle OURO- KPANTE Djamila</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                            Professionnelle de santé ( Sage-Femme & Biologiste )  conseils aux femmes
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={conseillere_jur} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab" }}> Mme ADA-Ani Rose</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                            Gestionnaire comptable , évaluation et suivi de projet .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={equipe} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#0072BE", fontFamily: "roboto slab" }}>Mme HOLA Elémi</h5>
                                        <p className="card-text" style={{ fontFamily: "poppins", fontSize: "20px" }} >
                                            Expert en développement personnelle et professionnelle .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la section notre équipe */}


            {/* debut de la petite section,invitation a agir avec nous */}
            <section className="give">
                <div className="region  text-center ">
                    <p>
                        <h3 className="maritime" style={{ color:"white" , fontFamily: "Roboto Slab, serif "}}>Réjoignez notre équipe !!!</h3>
                    </p>
                    <Link to="/parteners" style={{ color: "#F46A21", fontSize: "25px", fontFamily: "poppins" }} className="btn bg-light postulez shadow">Postulez</Link>
                </div>
            </section>
            {/* finde section */}
        </div>
    );

}

export default Projects;