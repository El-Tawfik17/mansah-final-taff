import emailjs from 'emailjs-com'


function Newsletter() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_bkrsw4d', 'template_pxswkq2', 
        e.target, 'q0cXJUc7nZQOBdMYi'
        ).then (res =>{
            console.log(res)
        }) .catch(err=> console.log(err));
    }


    return(
        <div className="col-md-5 mb-md-0 mb-4">
                                <h2 className="footer-heading">Souscrire</h2>
                                <form onSubmit={sendEmail} className="subscribe-form" >
                                    <div className="form-group d-flex">
                                        <input 
                                        type="email"
                                        name="user_email" 
                                        className="form-control rounded-left" 
                                        placeholder="Entrez votre adress mail" />
                                        <button type="submit" className="form-control submit rounded-right" >Souscrire</button>
                                    </div>
                                    <span className="subheading">S'abonner pour récevoir des nouvelles</span>
                                </form>
                            </div>
    );
}

export default Newsletter;