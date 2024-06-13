const Cart=require('../model/cart')
const cart_all= async(req,res)=>{
    let u_id=req.body.u_id;
    try{
        const detail= await Cart.find({u_id})
        if(detail.length!=0)
            {
                console.log("details found")
                res.send(detail)
            }
        else{
            console.log("No details found")
            res.send("Cart empty")
        }
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}
const insert_cart=async(req,res)=>{
   let  u_id=req.body.u_id
    let p_id= req.body.p_id
    const cart=new Cart({
       u_id,
       p_id,
        p_img:req.body.p_img,
        p_cost:req.body.p_cost,
        qty:1
    })

    try{
        const car=await Cart.findOne({u_id,p_id})
        if(car)
            {
                qty=qty+1
                const savedcart=await cart.save()
                console.log("product inserted in cart")
                res.send(savedcart)
            }
            else{
                qty=1
                const savedcart=await cart.save()
                console.log("product inserted in cart")
                res.send(savedcart)
            }
       

    }
    catch(error)
    {
        res.status(400).send(error)
    }
} 
module.exports={
    cart_all,
    insert_cart
}