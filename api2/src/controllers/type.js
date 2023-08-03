const axios = require('axios');
const { Type } = require('../db');
const { TYPES_URL } = require('../constants');

const getAllTypeAPI = async (req, res, next) => {
  try {
    const { data } = await axios.get(`${TYPES_URL}`); //, {

    const results = await data.results.map((valor) =>
      Type.findOrCreate({
        where: {
          name: valor.name,
        },
      })
    );
    const dbresult = await Type.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.json(dbresult);
  } catch (err) {
    next(err);
  }
};

export { getAllTypeAPI };
