const model = require('../models/product')

const getAllProducts = async (req,res) => {
    const reqData = await model.find();
    res.status(200).json(reqData);
};

const getAllProductsTesting = async (req,res) =>{
    const data = await model.find({featured:true});
    res.status(200).json({data})
}

module.exports = { getAllProducts, getAllProductsTesting };