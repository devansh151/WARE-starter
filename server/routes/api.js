const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200);
  res.send({message:'awesome!!!!'});
});


module.exports = router;