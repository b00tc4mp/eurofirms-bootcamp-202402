import MenuSearchTag from '../models/MenuSearchTag.js';

export const getMenuSearchTagsByEditionIdAndSearchTypeId = async (req, res) => {
  try {
    const editionId = req.params.editionId;
    const searchTypeId = req.params.searchTypeId;
    console.log(editionId);
    const menuSearchTags = await MenuSearchTag.find(
      {
        edition: editionId,
        searchType: searchTypeId,
      },
      '-createdAt -updatedAt',
      {
        sort: { index: 1 },
      }
    );

    if (!menuSearchTags) {
      return res.status(400).json({ message: 'MenuSearchTags no found' });
    }

    return res.json(menuSearchTags);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};
