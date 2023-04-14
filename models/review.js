const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
required:true
},
products: { type: mongoose.Schema.Types.ObjectId, 
    ref: "Product",
required:true
}
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);