const router = require('express').Router();

router.get('/', function(req, res) {
  res.send([{
    username: 'murugan@samarthya.com',
    name: 'Murugavel'
  }, {
    username: 'basav@samarthya.com',
    name: 'Basavaraj'
  }, {
    username: 'bharat@samarthya.com',
    name: 'Bharath'
  }]);
})

module.exports = router;
