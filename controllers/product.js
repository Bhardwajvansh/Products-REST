const getAllProducts = async (req,res) => {
    res.status(200).json({msg:"get all products working"});
};

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({
        msg:"testing is also woroking"
    })
}

module.exports = { getAllProducts, getAllProductsTesting };