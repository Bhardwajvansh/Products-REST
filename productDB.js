require('dotenv').config();
const connect = require("./db/connect");
const model = require("./models/product");
const productJSON = require('./product.json')

const start = async ()=>{
    try {
        await connect(process.env.MONGODB_URL);
        await model.create(productJSON);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();