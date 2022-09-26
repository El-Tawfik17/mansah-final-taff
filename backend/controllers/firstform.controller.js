require("mongoose");
const FirstForm = require('../models/firstform.model');

module.exports.submitFirstForm = async (req, res) => {
    const { categorie, statut, lastName, fisrtName, identity, gender, domain, title, Situation, experience, country, town, code, number, email, reasons, agree } = req.body.partner;

    try {
        const partner = await FirstForm.create({ categorie, statut, lastName, fisrtName, identity, gender, domain, title, Situation, experience, country, town, code, number, email, reasons, agree });

        res.status(200).json({ partner: partner });

    } catch (err) {
         
        res.status(201).send({ err });
    }

}

