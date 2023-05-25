const {Category}=require('../models/category')
 const express = require('express');
 const router=express.Router()
 const mongoose = require('mongoose');

 
// get all categories
router.get(`/`,async(req,res)=>{
 
    const categoryList=await Category.find();
    if(!categoryList)
    {
        res.status(500).json({success:false})
    }

    else
    {
    res.status(200).send(categoryList)
    }
})


// get one category with id
router.get(`/:id`,async(req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid category id ')
     }

    const category = await Category.findById(req.params.id);

    if(!category) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    else
    {
    res.status(200).send(category);
    }
})


// update one category by id
router.put('/:id',async (req, res)=> {

    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid category id ')
     }

     const categoryExist = await Category.findById(req.params.id);

    if(!categoryExist)
    {
        return res.status(404).json({ message:'the category is not found' })
    }

     if (Object.keys(req.body).length === 0)
     {
         return res.status(400).send('the category cannot be updated!')
     }
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon ,
            color: req.body.color,
        },
        { new: true}
    )

    if(!category)
    {
         res.status(400).send('the category cannot be updated!')
    }
    else
    {
    res.send(category);
    }
})




// add category
router.post(`/`, async (req,res)=>{
    if(!req.body.name)
    { 
        return res.status(400).send('the category cannot be created!')
    }
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save();

    if(!category)
    {
     res.status(400).send('the category cannot be created!')
    }
     else
     {
    res.send(category);
     }
})

// delete category
router.delete(`/:id`,(req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid category id ')
     }

    Category.findByIdAndRemove(req.params.id).then((category)=>{
        if(category)
        {
            return res.status(200).json({
                success:true,
                message:'the category is deleted successfully'
            })
        }
        else{
            return res.status(404).json({
                success:false,
                message:'the category is not found'
            })
        }
    })
})

 module.exports=router;