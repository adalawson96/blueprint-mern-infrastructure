const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/reviews'
router.post('/', reviewsCtrl.create);
router.get('/:id', reviewsCtrl.index);
router.put('/:id', reviewsCtrl.update);
router.delete('/:id', reviewsCtrl.deleteOne);

module.exports = router