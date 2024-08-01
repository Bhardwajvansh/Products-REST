const mongoose = require("mongooses");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: [true, "Please enter the price"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum: {
            values: ["Apple","Samsung","Dell","MI"],
            message: `{VALUE} not supported`,
        },
    }
})

module.exports = mongoose.model("Product", RESTTEST)