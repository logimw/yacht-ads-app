import create from 'services/users/create';

export default async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;
        const user = await create(payload);
        res.status(200).json({ status: 'created', user });
      } catch (e) {
        res.status(422).json({ status: 'not_created', error: e.message });
      }
      break;
    }
    default:
      res.status(400);
  }
};
