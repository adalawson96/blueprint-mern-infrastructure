const Review = require ('../../models/review');

module.exports = {
    create,
    index,
    update,
    deleteOne,
    findOne
};

async function create(req, res) {
    console.log('testing')
    try {
        req.body.user = req.user._id
        // console.log(req.body, 'REQ')
        const createdReview = await Review.create(req.body);
        // console.log(createdReview);

        res.json(createdReview)
    }catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try{
        console.log(req.params.id)
        const allReviews = await Review.find({product: req.params.id});
        console.log(allReviews)

        res.json(allReviews)
    }catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res){
    try{
        console.log(req.user._id)
        const allReviews = await Review.findByIdAndUpdate({ user: req.user._id, _id:req.params.id }, req.body, {new: true});
        console.log(allReviews)

        res.json(allReviews)
    }catch (err) {
        res.status(400).json(err);
    }
}

async function deleteOne(req, res){
    try{
        console.log(req.params.id)
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
   
    }catch (err) {
        res.status(400).json(err);
    }
}

async function findOne(req, res) {
    try{
        const foundReviews = await Review.find({_id:req.params.id});

        res.json(foundReviews)
    }catch (err) {
        res.status(400).json(err);
    }
}

