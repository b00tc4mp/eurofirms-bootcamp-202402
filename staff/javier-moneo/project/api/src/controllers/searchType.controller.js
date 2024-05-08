import SearchType from '../models/SearchType.js';

export const getSearchTypeByName = async (req, res) => {
  try {
    const name = req.params.name;
    // console.log(name);

    const searchType = await SearchType.findOne({ name: name }).lean().exec();

    // console.log(searchType);
    if (!searchType) {
      return res.status(404).json({ message: 'SearchType no found' });
    }

    if (searchType._id) {
      searchType.id = searchType._id;
      delete searchType._id;
    }

    return res.json(searchType);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};
