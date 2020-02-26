var express = require('express');
var router = express.Router();


let { Appliances } = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {

  let appliancesQuery = Appliances.find({}).sort({ name: -1 }).exec();
  
  appliancesQuery
  .then((appliances) => {
      res.json(appliances);
  })
  .catch((err) => {
      res.status(500).json(err);
  })

});

module.exports = router;
