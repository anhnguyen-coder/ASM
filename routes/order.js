var express = require ('express');
const OrderModel = require('../models/OrderModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var order_list = await OrderModel.find({})
    res.render('order/index', { orders : order_list })
 })

 router.get('/add', async (req, res) => {  
    res.render('order/add')
 })
 
 
 router.post('/add', async(req, res) =>{
    var order = req.body;
    await OrderModel.create(order)
    .then(()=>{console.log("Add new order succeed!!!")});
    res.redirect('/');
 
 })

router.post('/search', async (req, res) => {
    var keyword = req.body.title;
    var orders = await OrderModel.find({ customer_name: new RegExp(keyword, "i")})
    res.render('order/', { orders: orders })
 })
 
 //sort function
 router.get('/sort/asc', async (req, res) => {
    var orders = await OrderModel.find().sort({ customer_name: 1 })
    res.render('order/', { orders: orders })
 })
 
 router.get('/sort/desc', async (req, res) => {
    var orders = await OrderModel.find().sort({ customer_name: -1 })
    res.render('order/', { orders: orders })
 })

 router.post ('/detail', async (req, res) => {
    var id = req.body.id;
    var order = await OrderModel.findById(id);
    res.render('order/detail', { order : order })
})

 module.exports = router;