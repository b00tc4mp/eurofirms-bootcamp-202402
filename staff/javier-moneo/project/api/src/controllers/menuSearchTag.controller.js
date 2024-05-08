import MenuSearchTag from '../models/MenuSearchTag.js';

export const getMenuSearchTagsByEditionId = async (req, res) => {
  try {
    const editionId = req.params.editionId;
    console.log(editionId);
    const menuSearchTags = await MenuSearchTag.find({ edition: editionId });

    return res.json(menuSearchTags);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
