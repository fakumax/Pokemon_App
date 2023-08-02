import { get } from 'axios';
import { Type } from '../utils/database';
import { TYPES_URL } from '../utils/constants';

async function getAllTypeAPI(req, res, next) {
  try {
    const { data } = await get(`${TYPES_URL}`); //, {

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
}

export default {
  getAllTypeAPI,
};
