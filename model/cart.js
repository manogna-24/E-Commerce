const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema(
    {
        "p_id":String,
        "u_id":String,
        "p_img":String,
        "p_cost":Number,
        "qty":Number
    }
)
module.exports= mongoose.model("cart",cartSchema)