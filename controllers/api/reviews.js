const Review = require ('../../models/review');

module.exports = {
    create,
    index
};

async function create(req, res) {
    try {
        req.body.user = req.user._id

        const createdReview = await Review.create(req.body);
        console.log(createdReview);

        res.json(createdReview)
    }catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try{
        const allReviews = await Review.find({});
        console.log(allReviews)

        res.json(allReviews)
    }catch (err) {
        res.status(400).json(err);
    }
}