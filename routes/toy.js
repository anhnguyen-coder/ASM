var express = require ('express');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var toy_list = await ToyModel.find({})
   res.render('toy/index', { toys : toy_list })
})

// router.get('/list', async (req, res) => {
//     var toy_list = await ToyModel.find({})
//     res.render('toy/list', { toys : toy_list })
//  })

router.get('/delete/:id', async(req, res) => {
   await ToyModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete toy succeed !')});
   res.redirect('/toy');
})


router.get('/add', async (req, res) => {  
   res.render('toy/add')
})


router.post('/add', async(req, res) =>{
   var toy = req.body;
   await ToyModel.create(toy)
   .then(()=>{console.log("Add new toy succeed!!!")});
   res.redirect('/toy');

})

router.get('/edit/:id', async (req, res) => {
   var toy = await ToyModel.findById(req.params.id);
   res.render('toy/edit', { toy : toy})
})

router.post('/edit/:id', async(req, res) =>{
   await ToyModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit toy succeed!!!")});
   res.redirect('/toy');
})

//search function


module.exports = router;