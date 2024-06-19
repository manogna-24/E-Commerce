const Cart=require('../model/cart')
const User=require('../model/user')
const cart_all= async(req,res)=>{
    let u_id=req.body.u_id;

    try{
        const sav=await User.findOne({u_id})
        const detail= await Cart.find({u_id})
        if(!sav){
            console.log("User not registered")
            res.send("Wrong user id")
        }
        else{
        if(detail.length!=0)
            {
                console.log("details found")
                res.send(detail)
            }
        else{
            console.log("No details found")
            res.send("Cart empty")
        }
    }}
    catch(error)
    {
        res.status(400).send(error)
    }
}
const insert_cart=async(req,res)=>{
   let  u_id=req.body.u_id
    let p_id= req.body.p_id
    

    try{
        const car=await Cart.findOne({u_id,p_id})
        if(!car){
            const cart=new Cart({
                u_id,
                p_id,
                 p_img:req.body.p_img,
                 p_cost:req.body.p_cost,
                 qty:req.body.qty
             });
            const savedcart=await cart.save()
            console.log("product inserted in cart")
            res.send(savedcart)
        }
        else{
          car.qty=req.body.qty+car.qty
          const savedcart=await car.save()
            console.log("product inserted in cart")
            res.send(savedcart)

        }
            
       

    }
    catch(error)
    {
        res.status(400).send(error)
    }
} 
const del_cart=async(req,res)=>{
    let u_id=req.body.u_id
    let p_id=req.body.p_id
    try{
        const car=await Cart.findOne({u_id,p_id})
        if(car){
            if(car.qty==1){
                const car_del=await Cart.deleteOne({u_id,p_id})
                    console.log("product deleted from cart")
                    res.send(car_del)

            }
            else
            {
                car.qty=car.qty-1
                console.log("One item of this product deleted")
                    res.send(car)
            }
        }
        else
        {
            console.log("Item nor found")
            res.send("Item not in cart")
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports={
    cart_all,
    insert_cart,
    del_cart
}
