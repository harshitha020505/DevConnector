const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:True
    },
    email:{
        type:String,
        required:True,
        Unique:True
    },
    password:{
        type:String,
        required:True
    },
    avatar:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now
    }

})
module.exports=User=mongoose.model('user',UserSchema);