const express = require('express');
const User = require('../Controller/usercontrollers'); // Adjust the path according to your project structure
const Product = require('../Controller/productcontrollers'); // Adjust the path according to your project structure
const Login=require('../Controller/logincontrollers')
const router = express.Router();

// --------- USER ROUTES -----------

// Get all users
router.get('/users', User.getUsers);
router.post('/add', User.addUser);
router.delete('/user/delete/:id', User.deleteUser);
router.get('/product', Product.getProduct);
router.post('/addproduct', Product.addProduct);
router.delete('/product/delete/:id', Product.deleteProduct);
router.post('/login', Login.loginUser);


module.exports = router;
