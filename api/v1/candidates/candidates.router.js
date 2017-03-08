const router = require('express').Router();

router.get('/', function(req, res) {
  res.send([{
    username: 'murugan@samarthya.com',
    name: 'Murugavel'
  }, {
    username: 'basav@samarthya.com',
    name: 'Basavaraj'
  }]);
})

module.exports = router;
