//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApi')
//fetch all records
router.get("/profetch", productApi.products_all)
//insert a record
router.post("/proinsert", productApi.insert_product)
//update a record
router.put("/proupdate", productApi.update_product)
//delete a record
router.delete("/prodelete", productApi.delete_product)
//export router
module.exports = router
