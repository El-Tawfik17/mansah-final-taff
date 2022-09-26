import React from 'react';
import woman1 from '../images/femmes_enceinte/woman1.jpg';
import black from '../images/femmes_enceinte/black.jpg';
import grosse from '../images/femmes_enceinte/grosse.webp';
import { Link } from 'react-router-dom'

function Sliders() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-light slide  mt-2" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={woman1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-caption d-none d-md-block  pt-5" style={{ fontFamily: "'Roboto Slab', serif"}}>
          <h1>OEUVER POUR LA SANTE MENTALE DE LA <br />JEUNE FILLE ENCEINTE, SEULE ET DEPRESSIVE</h1>
          <h5 className='text-caroousel'style={{ fontFamily: "poppins"}}>Oeuvrer pour un monde meilleur !!!</h5>
          <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={black} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  pt-5" style={{ fontFamily: "'Roboto Slab', serif"}}>
            <h1>PARTICIPER AU BIEN-ETRE MENTALE D'UNE FEMME <br />ENCEINTE ET EMOTIONNELLEMENT INSTABLE</h1>
            <h5 className=''style={{ fontFamily: "poppins"}}>Redonner goût a la vie!!!</h5>
            <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={grosse} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block  pt-5"  style={{ fontFamily: "'Roboto Slab', serif"}}>
            <h1>OFFRIR UN AVENIR MEILLEUR AUX FUTURS ENFANTS<br />A TRAVERS LE SOUTIEN APPORTE AU MERE</h1>
            <h5 className='' style={{ fontFamily: "poppins"}}> Contribuer à une vie pleine d'espérance!!!</h5>
            <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden" >Next</span>
      </button>
    </div>
  );
}

export default Sliders; 