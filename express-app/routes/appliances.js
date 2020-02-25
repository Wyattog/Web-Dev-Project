var express = require('express');
var router = express.Router();

let { Appliances } = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {

  let appliancesQuery = Appliances.find({});
  appliancesQuery.sort({ name: -1 });
  let findPromise = appliancesQuery.exec();
  findPromise
  .then((appliances) => {
      res.json(appliances);
  })
  .catch((err) => {
      res.status(500).json(error);
  })

});

module.exports = router;
