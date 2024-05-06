import Edition from '../models/Edition.js';

export const getEditions = async (req, res) => {
  const editions = await Edition.find();
  return res.json(editions);
};

export const getEditionByCode = async (req, res) => {
  const code = req.params.code;
  // console.log(code);

  const edition = await Edition.findOne({ code: code });

  // console.log(edition);
  if (!edition) {
    return res.status(404).json({ message: 'Edition no found' });
  }

  return res.json(edition);
};
