import getRecent from '../../../services/offers/getRecent';

export default async (req, res) => {
  const offers = await getRecent(4);
  res.status(200).json(offers);
};
