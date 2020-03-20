const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String, default: ""},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, minlength: 3, default: ""},
    image: {type: String, required: true, minlength: 3, maxlength: 350},
    ratings: [RatingSchema],
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const Rating = mongoose.model("Rating", RatingSchema);
const Cake = mongoose.model("Cake", CakeSchema);

module.exports = Cake;
