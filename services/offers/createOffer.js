import airDB from 'services/airtableClient';

const createOffer = async (payload) => {
  const offer = await airDB('offer').create([
    {
      fields: {
        ...payload,
        price: Number(payload.price),
        status: 'active'
      }
    }
  ]);

  return offer;
};

export default createOffer;
