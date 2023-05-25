const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// get all users
router.get(`/`, async (req, res) =>{
    //const userList = await User.find().select('-passwordHash');

    const userList = await User.find().select("name phone email");
    if(!userList) {
      return  res.status(500).json({success: false})
    } 
    else
    {
       return res.send(userList);
    }
})



// add new user 
router.post('/', async (req,res)=>{
    if(!req.body.name||!req.body.email||!req.body.password||!req.body.phone)
    { 
        return res.status(400).send('the user cannot be created!')
    }
    else
    {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash:bcrypt.hashSync(req.body.password,+'secret'),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    })
    user = await user.save();

  return  res.send(user);
    }
})



// get user by id 
router.get('/:id', async(req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid user Id')
     }
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user) {
      return  res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    else
    {
      return res.status(200).send(user);
    }

})



// login 
router.post('/login', async (req,res) => {
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.SECRET;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn : '1d'}
        )
       
        res.status(200).send({user: user.email , token: token}) 
    } 
    else {
       res.status(400).send('password is wrong!');
    }

    
})


// register
router.post('/register', async (req,res)=>{

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        //create new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash:hashedPassword,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        });
    
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err)
      }
    }




   )








// get number of users
router.get(`/get/count`, async (req, res) =>{
    const userCount = await User.count()

    if(!userCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        userCount: userCount
    });
})




// delete users
router.delete(`/:id`,(req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid user Id')
     }


    User.findByIdAndRemove(req.params.id).then((user)=>{
        if(user)
        {
            return res.status(200).json({
                success:true,
                message:'the user is deleted successfully' })
        }
        else{
            return res.status(404).json({
                success:false,
                message:'the user is not found'
            })
        }
    })

})



//update user
router.put('/:id',async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid user Id')
     }

    const userExist = await User.findById(req.params.id);

    if(!userExist)
    {
        return res.status(404).json({ message:'the user is not found' })
    }
    let newPassword
    
    if(req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, +'secret')
    } else {
        newPassword = userExist.passwordHash;
    }
       
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).send('the user cannot be updated!')
    }
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        },
        { new: true}
    )

    if(!user)
    {
        return res.status(400).send('the user cannot be created!')
    }
    else
    {
       return res.send(user);

    }
})

module.exports =router;


/*
{
"name":"user 101",
"email":"user1@gmail.com",
"password":"123",
"phone":"123456789",
"isAdmin":false,
"street":"",
"apartment":"",
"zip":"",
"city":"cairo",
"country":"egypt"
}
*/