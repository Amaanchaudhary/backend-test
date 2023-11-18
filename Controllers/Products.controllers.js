import ProductModals from "../modals/Product.modals.js"

export const AddProduct = async (req , res) => {
    try{
        const {name , category , image , price} = req.body

        if(!name || !category || !image || !price) return res.status(400).json({sucsess : false , message : "All fields are mandatory"})

        const products = new ProductModals({
            name,
            category,
            image,
            price
        })

        await products.save();

        return res.status(200).json({success : true , message : "Product Succesfully added"})

    }catch(error){
        res.status(400).json({ success: false, message: error.message })
    }
}

export const GetAllProducts = async (req , res) => {
    try{
        const product = await ProductModals.find({})

        return res.status(200).json({success : true , message : "Products Found ", product})

    }
    catch(error){
        res.status(400).json({ success: false, message: error.message })
    }
}