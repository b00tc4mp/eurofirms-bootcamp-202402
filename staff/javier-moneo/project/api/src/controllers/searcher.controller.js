import Searcher from '../models/Searcher.js';

export const getSearchers = async (req, res) => {
  const searchers = await Searcher.find();
  return res.json(searchers);
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
