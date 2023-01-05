const { findById } = require("../models/productModel")
const Product = require("../models/productModel")
const ApiFeatures = require("../utils/apifeatures")


//create Product  - Admin

exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Get Products
exports.getAllProducts = async (req, res) => {
    resultPerpage = 5;
    const productCount= await Product.countDocuments()
    const apiFeature =new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerpage)
    // const products = await Product.find();
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products
    })
}

// get product details

exports.getProductDetails = async (req, res,next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: "false",
            msg: "Product not found"
        })
    }


    res.status(200).json({
        success: true,
        product,
        productCount
    })
}


// Update Product - Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);


    product = await Product.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
        success: true,
        product
    })
}

//delete Product - Admin
exports.deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success: "false",
            msg: "Product not found"
        })
    }
    await product.remove()

    res.status(200).json({
        success: true,
        msg:"product deleted successfully"
    })
}
