import airDB from 'services/airtableClient';
import Joi from 'joi';

const schema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().valid('rent', 'sale').required(),
  mobile: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.number().greater(0).required()
});

const update = async (airtableId, payload) => {
  const validateOffer = await schema.validateAsync(payload);
  const offer = await airDB('offer').update([
    {
      id: airtableId,
      fields: { ...validateOffer }
    }
  ]);

  return offer;
};

export default update;
