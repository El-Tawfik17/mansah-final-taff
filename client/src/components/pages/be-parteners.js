import axios from 'axios';
import React, { useState } from 'react';
import {UsersService} from '../../services/UsersService';

// import equipe from "../images/femmes_enceinte/equipe.webp";

function Parteners() {

    let [state, setState] = useState({
        loading: false,
        partner: {
            categorie: "",
            statut: "",
            lastName: "",
            firstName: "",
            identity: "",
            gender: "",
            domain: "",
            title: "",
            situation: "",
            experience: "",
            country: "",
            town: "",
            code: "",
            number: "",
            email: "",
            reasons: "",
            agree: ""
        },
    });

    let createInput = (e) => {
        setState({
            ...state,
            partner: {
                ...state.partner,
                [e.target.name]: e.target.value
            }
        });
    };

    let submitForm =async (e)=>{
        e.preventDefault();
        console.log(state);
        await axios.post('http://localhost:8000/api/form/user',state)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err));
    };

    let { partner} = state;

    return (
        <div>

            {/* la section devenir partenaire */}
             {/* <pre> {JSON.stringify (state.partner)} </pre> */}

             {/* debut de la premiere section traitant du heading */}
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>Nous réjoindre</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Nous réjoindre
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de la section */}

            {/* section devenir partenaire proprement dite */}
            <section className="section bg-c-light mt-5">
                <div className="container">
                    <h4 className="main-heading">Devenir parténaire</h4>
                    <div className="underline "></div>
                </div>
                <div className='container'>
                    <div className='row membre '>
                        
                        <div className='col-md-12 text-center '>
                            <p className=' text-partner ' style={{ fontFamily: "poppins", marginTop: "5px", fontSize: "22px" }}>
                                IL est certes vrai que nous avons opter pour ce chemin qui est celui de redonner le goût de vivre
                                à toutes ces jeunes mères célibataires, sinon à toutes les mères célibataires qui font une depression du fait
                                compte tenu des réalités qu'elle vivent aux quotidiens; Conséquences certaines perdent la vie avant d'arriver à terme de leur grossesses , et d'autres ce sont des troubles
                                psychologiques. Aussi il est évident que cette situation impacte aussi sur l'avenir des enfants que ces dames portes
                                car non seulement ils viennent déjà dans une famille monoparentale, avec l'instabilité mentale de la mère, l'éducation que cet enfant réçoit de cette
                                dernière n'est pas souvent de bonne qualité; Il y aura un manque à combler chez l'enfant. De même sur le plan scolaire, bon nombre de ces enfants
                                n'évoluent pas comme il le faut. Egalement , il est rélévé que certains de ces enfants finissent par, sans aucun suivi
                                réelle, abandonner l'école et même la maison, élisant ainsi domicile dans la rue. Mais nous avons bésoin de vous
                                , de avons bésoin de votre soutien, de votre savoir être et savoir faire, ces femmes dépressives qui traversent une période
                                sombre de leurs vies ont besoin de vous. Ensemble nous pouvons écrire une nouvelle histoire dans la vie de ces femmes et enfants. <br />
                                Afin de mieux servir ces mères célibataires, nous avons besoin de ressources humaines et aussi des dons en nature et numéraires, vous pouvez postulez en remplissant les formulaire
                                ci-dessous.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* fin de section */}


            {/* section traitant du formulaire */}
            <section className="h-100  shadow  bg-c-light"  >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                   

                                    <form action="" method="post" onSubmit={submitForm}>
                                        <div className="row g-0 text-form">
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}> Infomation Générale</h3>

                                                    <div className="mb-4 pb-2">
                                                        <label className="form-label" htmlFor="categorie">Vous postulez pour quelle catégorie?</label>
                                                        <select
                                                            type="select"
                                                            id="categorie"
                                                            name="categorie"
                                                            className="form-control form-control-lg select"
                                                            value={partner.categorie}
                                                            onChange = {createInput}
                                                            required = {true}>

                                                            <option >veuillez choisir s'il vous plaît</option>
                                                            <option value="Bénévolat">Bénévolat</option>
                                                            <option value="Don">Don</option>
                                                            <option value="Partenariat">Partenariat</option>
                                                        </select>

                                                    </div>

                                                    <div className="mb-4 pb-2">
                                                        <label className="form-label" htmlFor="statut">Votre identité juridique</label>
                                                        <select
                                                            type="text"
                                                            id="statut"
                                                            name="statut"
                                                            className="form-control form-control-lg select"
                                                            value={partner.statut}
                                                            onChange = {createInput}
                                                            required = {true}>

                                                            <option value="1">veuillez choisir s'il vous plaît</option>
                                                            <option value="2">Particulier</option>
                                                            <option value="3">Association</option>
                                                            <option value="4">ONG</option>
                                                        </select>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="lastName">Nom</label>
                                                                <input
                                                                    type="text"
                                                                    id="lastName"
                                                                    name="lastName"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.lastName}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="firstName">Prénom</label>
                                                                <input
                                                                    type="text"
                                                                    id="firstName"
                                                                    name="firstName"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.firstName}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row'>

                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="identity">Nationalité</label>
                                                                <input
                                                                    type="text"
                                                                    id="identity"
                                                                    name="identity"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.identity}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>
                                                        </div>
                                                        <div className=" col-md-6 mb-4 pb-2 ">
                                                            <label className="form-label" htmlFor="gender">Genre</label>

                                                            <select
                                                                type="text"
                                                                id="gender"
                                                                name="gender"
                                                                className=" form-control form-control-lg"
                                                                value={partner.gender}
                                                                onChange = {createInput}
                                                                required = {true}>

                                                                <option >veuillez choisir s'il vous plaît</option>
                                                                <option value="Féminin">Féminin</option>
                                                                <option value="Masculin">Masculin</option>
                                                                <option value="Autres">Autres</option>
                                                            </select>

                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="domain">Domaine</label>
                                                                <input
                                                                    type="text"
                                                                    id="domain"
                                                                    name="domain"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.domain}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="title">Titre</label>
                                                                <input
                                                                    type="text"
                                                                    id="title"
                                                                    name="title"
                                                                    className="form-control form-control-lg" 
                                                                    value={partner.title}
                                                                    onChange = {createInput}
                                                                    required = {true}/>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="form-label" htmlFor="situation">Quel est votre situation professionnelle actuelle?</label>
                                                            <select
                                                                type="text"
                                                                id="situation"
                                                                name="situation"
                                                                className="form-control form-control-lg"
                                                                value={partner.situation}
                                                                onChange = {createInput}
                                                                required = {true}>

                                                                <option >veuillez choisir s'il vous plaît</option>
                                                                <option value="Employé(e) à temps plein">Employé(e) à temps plein</option>
                                                                <option value="Employé(e) à temps partiel">Employé(e) à temps partiel</option>
                                                                <option value="Indépendant(e)">Indépendant(e) </option>
                                                                <option value="Entrepreneur(e)">Entrepreneur(e) </option>
                                                                <option value="Etudiant(e)">Etudiant(e) </option>
                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="experience">Nombre d'années d'expérience professionnelle</label>
                                                                <input
                                                                    type="text"
                                                                    id="experience"
                                                                    name="experience"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.experience}
                                                                    onChange = {createInput}
                                                                    required = {true} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-6  text-white" style={{ background: "#0072BE", fontSize: "20px", fontFamily: "poppins", }}>
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5">Détails de contact</h3>

                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline form-white">
                                                            <label className="form-label" htmlFor="country">Pays de résidence actuelle</label>
                                                            <input
                                                                type="text"
                                                                id="country"
                                                                name="country"
                                                                className="form-control form-control-lg" 
                                                                value={partner.country}
                                                                onChange = {createInput}
                                                                required = {true}/>

                                                        </div>
                                                    </div>

                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline form-white">
                                                            <label className="form-label" htmlFor="town">Ville</label>
                                                            <input
                                                                type="text"
                                                                id="town"
                                                                name="town"
                                                                className="form-control form-control-lg" 
                                                                value={partner.town}
                                                                onChange = {createInput}
                                                                required = {true}/>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-5 mb-4 pb-2">

                                                            <div className="form-outline form-white">
                                                                <label className="form-label" htmlFor="code">Code +</label>
                                                                <input
                                                                    type="text"
                                                                    id="code"
                                                                    name="code"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.code}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>

                                                        </div>
                                                        <div className="col-md-7 mb-4 pb-2">

                                                            <div className="form-outline form-white">
                                                                <label className="form-label" htmlFor="number">Numéro de téléphone</label>
                                                                <input
                                                                    type="text"
                                                                    id="number"
                                                                    name="number"
                                                                    className="form-control form-control-lg"
                                                                    value={partner.number}
                                                                    onChange = {createInput}
                                                                    required = {true} />

                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="form-outline form-white">
                                                            <label className="form-label" htmlFor="email">Votre Email</label>
                                                            <input
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                className="form-control form-control-lg"
                                                                value={partner.email}
                                                                onChange = {createInput}
                                                                required = {true} />

                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="reasons">Dites nous vos motivations à vouloir agir avec nous !</label>
                                                        <textarea
                                                            type=""
                                                            id="reasons"
                                                            name="reasons"
                                                            className="form-control"
                                                            rows="10"
                                                            value={partner.reasons}
                                                            onChange = {createInput}
                                                            required = {true}></textarea>

                                                    </div>

                                                    <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                                        <input
                                                            className="form-check-input me-3"
                                                            type="checkbox"
                                                            id="agree"
                                                            name="agree"
                                                            value={partner.agree}
                                                            onChange = {createInput}
                                                            required = {true}
                                                        />
                                                        <label className="form-check-label text-white" htmlFor="agree">
                                                            I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                                                            site.
                                                        </label>
                                                    </div>

                                                    <button type="submit" className="btn  btn-lg ms-2" style={{ background: "#F46A21", color: "white" }}
                                                        data-mdb-ripple-color="dark">Envoyez</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* fin de section */}

        </div >
    );

}

export default Parteners;