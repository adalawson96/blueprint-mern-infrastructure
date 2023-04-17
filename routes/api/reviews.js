const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/reviews'
router.post('/', reviewsCtrl.create);
router.get('/:id', reviewsCtrl.index);
router.get('/findone/:id', reviewsCtrl.findOne);
router.put('/:id', ensureLoggedIn, reviewsCtrl.update);
router.delete('/:id', ensureLoggedIn, reviewsCtrl.deleteOne);

module.exports = router