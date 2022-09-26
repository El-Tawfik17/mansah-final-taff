import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaPhoneAlt, FaSistrix } from 'react-icons/fa';
import logofondation from '../images/femmes_enceinte/logofondation.PNG'
import { IconContext } from 'react-icons';


function Navbar() {


    return (

        <div className='top-nav'>
            <div className="border-bottom  bg-c-light"   >
                <div className="container">

                    <div className=" d-flex ">
                        <div className="p-2  flex-grow-1">
                            <p className="mt-3 contact" style={{fontFamily: "'Roboto Slab', serif", fontSize: "17px" }}>
                                <FaPhoneAlt size="19px" color="#0072BE"  /> Contact : (+228) 97052081
                            </p>
                        </div>
                        <div className=' p-2 mt-3'>
                            <form className="d-flex" role="search">
                                <input style={{ fontFamily: "'Roboto Slab', serif", fontSize: "17px" }}
                                className="form-control me-1"  
                                type="search" 
                                placeholder="Recherche" 
                                aria-label="recherche" />
                                
                                <button className="btn btn" type="submit" ><FaSistrix size="20px" color="#0072BE" /></button>
                            </form>
                        </div>
                        <div id='social' className="p-2 mt-4 icons w-25 d-flex justify-content-evenly" >
                            <a target="_blank" className='' href="https://web.facebook.com/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaFacebookSquare size="20px" color="#0072BE" /></span></a>
                            <a target="_blank" className='' href="https://www.linkedin.com/feed/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Linkedin"><span><FaLinkedin size="20px" color="#0072BE" /></span></a>
                            <a target="_blank" className='' href="https://twitter.com/home" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaTwitter size="20px" color="#0072BE" /></span></a>
                            <select className=' ' style={{ color: "#0072BE", fontFamily: "'Roboto Slab', serif",fontSize: "19px", border:"none", fontWeight:"bolder" }}>
                                <option value="Fr">Fr</option>
                                <option value="En">En</option>
                            </select>
                            {/* <div id="google_translate_element"></div> */}
                            

                        </div>
                    </div>

                </div>
            </div>

            <nav className="navbar navbar-expand-lg  bg-c-light " style={{ color: "#0072BE" }}>
                <IconContext.Provider value={{ size: 40, color: '#0072BE' }}>

                    <div className="container" >
                    <img src={logofondation} className="d-block w-15 logo shadow "  alt="..." />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <Link to="/" className="nav-link  ms-3" style={{ color: "#0072BE", fontFamily: "'Roboto Slab', serif",fontSize: "19px"  }}>La Fondation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link ms-3 " style={{ color: "#0072BE",fontFamily: "'Roboto Slab', serif", fontSize: "19px" }}>Nos Missions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/network" className="nav-link ms-3" style={{ color: "#0072BE", fontFamily: "'Roboto Slab', serif",fontSize: "19px" }}>Notre Réseau</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/parteners" className="nav-link ms-3 " style={{ color: "#0072BE",fontFamily: "'Roboto Slab', serif", fontSize: "19px" }}> Nous Rejoindre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/novel" className="nav-link ms-3" style={{ color: "#0072BE", fontFamily: "'Roboto Slab', serif",fontSize: "19px"  }}>Blog</Link>
                                </li>
                            </ul>
                            <Link to="/submitPage" style={{ background: "#F46A21", color: "white", fontFamily: "'Roboto Slab', serif",fontSize: "20px" }} className="btn btn shadow mx-auto bouton" >Soumettez votre demande</Link>

                        </div>
                    </div>
                </IconContext.Provider>
            </nav>
        </div>
    );

}

export default Navbar;