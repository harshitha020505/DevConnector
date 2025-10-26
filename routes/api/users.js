const express=require('express');
const {check,validationResult}=require('express-validator');
const router=express.Router();
router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email',"enter correct email").isEmail(),
    check('password',"enter password which have min length 6").isLength({min:6})
],(req,res)=>{
   const errors= validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
   }
   res.send("user route");
    console.log(req.body);
})
router.get('/',(req,res)=>{
    res.send("user route");
})
module.exports=router;