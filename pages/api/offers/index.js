import getRecent from 'services/offers/getRecent';
import createOffer from 'services/offers/createOffer';

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const offers = await getRecent(4);
      res.status(200).json(offers);

      break;
    }
    case 'POST': {
      try {
        const payload = req.body;
        console.log('Backend:', payload);
        const offer = await createOffer(payload);
        res.status(200).json({ status: 'created', offer });
      } catch (error) {
        res.status(422).json({ status: 'not_created', error });
      }
      break;
    }

    default:
      res.status(400);
  }
};
