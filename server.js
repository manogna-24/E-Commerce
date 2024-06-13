const  express= require('express')
const bodyparser=require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
let url=require('./url')
let app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(cors())
mongoose.connect(url,{dbname: "Ecommerce"})
 .then(()=>{
         console.log('Connection Success')
         },(errRes)=>{
         console.log('Connection Failed: ',errRes)

 }
)
const productRoutes=require('./routes/productRoutes')
app.use("/",productRoutes)
const userRoutes=require('./routes/userRiutes')
app.use("/",userRoutes)
const cartRoutes=require('./routes/cartRoutes')
app.use("/",cartRoutes)
let port =8080
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})
