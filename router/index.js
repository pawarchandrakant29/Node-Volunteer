const express = require('express');
const router = express.Router();
const set = require('../controllers/controller')

router.get('/', set.DefaultController);
router.get('/AddForm', set.AddController );
router.post('/Add', set.AddVol);
router.get('/Edit/:id', set.SingleVol);
router.post('/Update/:id', set.UpdateVol);
router.get('/Delete/:id', set.DeleteVol);
module.exports = router;
    