const { Router } = require('express');
const router = Router();

const {getAllTypeAPI} = require('../controllers/type');

router.get('/', getAllTypeAPI);
module.exports = router;
