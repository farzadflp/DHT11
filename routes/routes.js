var express = require('express');
var router = express.Router();

router.use('/sensors/dht11/temperature' , require('./sensors/dht11/temperature') );
router.use('/sensors/dht11/humidity', require('./sensors/dht11/humidity') );

router.all('/', (req, res) => {
  res.send({
    status: 'success'
  })
});

module.exports = router;