const {Router} = require('express');
const controler = require('../controlers/department-controler');

const router = new Router();

router.get('/',controler.getDepartments );

module.exports = router;
