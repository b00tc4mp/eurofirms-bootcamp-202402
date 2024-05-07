import Edition from '../models/Edition.js';

export const getEditions = async (req, res) => {
  try {
    const editions = await Edition.find({}, '-_id', {
      sort: { name: 1 },
    })
      .populate('language', '-_id')
      .populate('country', '-_id')
      .exec();

    return res.json(editions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
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