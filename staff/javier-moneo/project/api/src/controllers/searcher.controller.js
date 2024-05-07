import Searcher from '../models/Searcher.js';

export const getSearchers = async (req, res) => {
  try {
    const searchers = await Searcher.find({ isActive: true }, '-_id', {
      sort: { name: 1 },
    })
      .populate('searcherType', '-_id')
      .populate('searchTypes', '-_id')
      .exec();

    return res.json(searchers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSearcherByName = async (req, res) => {
  const name = req.params.name;
  // console.log(name);

  const searcher = await Searcher.findOne({ name: name });

  // console.log(searcher);
  if (!searcher) {
    return res.status(404).json({ message: 'Searcher no found' });
  }

  return res.json(searcher);
};
