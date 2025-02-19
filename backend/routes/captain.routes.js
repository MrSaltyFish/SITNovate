const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min : 3}).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 5}).withMessage('Password must be at least 5 characters long'),
    body('vehical.color').isLength({ min: 3}).withMessage('Color must be atleast 3 characters long'),
    body('vehical.plate').isLength({ min: 3}).withMessage('Plate must be atleast 3 characters long'),
    body('vehical.capacity').isLength({ min: 1}).withMessage('Capacity must be atleast 1 characters long'),
    body('vehical.vehicalType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehical type'),
] , captainController.registerCaptain)


 router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 5}).withMessage('Password must be at least 6 characters long')
 ], captainController.loginCaptain)

 router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

 router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;