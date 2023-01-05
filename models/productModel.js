const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    category: {
        type: String
    },
    stock: {
        type: Number
    },

    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String
            },
            rating: {
                type: Number
            },
            comment: {
                type: String
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("Product", productSchema);
