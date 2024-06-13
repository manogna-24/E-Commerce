const User= require('../model/user')
const user_all= async(req,res)=>{
    try{
        const users=await User.find()
        console.log("Data sent")
        res.json(users)
    }
    catch(error)
    {
        console.log('Fetch error :- ',error)
        res.json({'message': error})
    }
}
const register=async(req,res)=>{
      let u_id= req.body.u_id
       let u_name= req.body.u_name
       let u_pwd= req.body.u_pwd
        let u_email= req.body.u_email
        let u_addr= req.body.u_addr
        let u_contact= req.body.u_contact
    const user=new User({
        u_id,
        u_name,
        u_pwd,
        u_email,
        u_addr,
        u_contact
    })
    try{
        const reg=await User.findOne({u_id})
        if(reg)
            {
                // const savedUser=await user.save()
                console.log('user already registered')
                res.send('user already registered')
            }
        else
        {
        const savedUser=await user.save()
        console.log('user registered')
        res.send(savedUser)
        }
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}
const login= async(req,res)=>{
    let u_id=req.body.u_id
    let u_pwd=req.body.u_pwd
    const obj={u_id,u_pwd}
    console.log(obj)
    try{
        const login=await User.findOne(obj)
        if(login)
            {
                console.log('Login Success')
                res.json({'auth': 'success', 'user': u_id})
            }
        else{
            console.log('Not Logged in')
            res.json({ 'update': 'Wrong credentials' })
        }
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}
const update_user=async(req,res)=>{
    let u_id =req.body.u_id
    const user={
        u_name:req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact

    }
    try{
        const updateUser=await User.updateOne(
            {u_id},user
        )
        if(updateUser.modifiedCount!=0)
            {
                console.log("User details updated ",updateUser)
            }
        else{
            console.log("User details not uodated")
            res.send({'update':'Record Not Found'})
        }
    }
    catch(error)
    {
        res.status(400).send(error)
    }
 
}
const delete_user= async(req,res)=>
    {
        let u_id = req.body.u_id
        try {
            const deleteduser = await User.deleteOne({ u_id })
            if (deleteduser.deletedCount != 0) {
                console.log('User Deleted')
                res.send({ 'delete': 'success' })
            }
            else {
                console.log('User Not deleted')
                res.send({ 'delete': 'Record Not Found' })
            }
        }
        catch (error) {
            res.status(400).send(error)
        }  
    }
module.exports={
    user_all,
    register,
    login,
    update_user,
    delete_user
}