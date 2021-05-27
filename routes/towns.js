const {Router} = require('express');
const controler = require('../controlers/town-controler');

const router = new Router();

router.get('/',controler.getTowns );

router.get('/:code',controler.getDepartments)

module.exports = router;
