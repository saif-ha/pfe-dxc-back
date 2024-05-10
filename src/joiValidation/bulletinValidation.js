const Joi = require('joi');

// Schéma de validation pour la création et la mise à jour d'un bulletin
const bulletinSchema = Joi.object({
  marque: Joi.string().required(),
  refBS: Joi.string().required(),
  nomAdherent: Joi.string().required(),
  prenomMalade: Joi.string().required(),
  dateSoins: Joi.date().iso().required(),
  honoraires: Joi.string().required(),
  pharmacie: Joi.string().required(),
  //ajout ca 
  analyse: Joi.string().required(),
  radiechoscanner : Joi.string().required(),
  Maternité: Joi.string().required(),
  Chirurgie :  Joi.string().required(),
  Inject: Joi.string().required(),
  Dent: Joi.string().required(),
  Monture :  Joi.string().required(),
  Total : Joi.string().required(),
});

// Fonction de validation des données du bulletin
const validation = (data) => {
  return bulletinSchema.validate(data, { abortEarly: false }).error;
};

module.exports = { validation };
