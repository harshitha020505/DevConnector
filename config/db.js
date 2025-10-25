const mongoose=require('mongoose');
const config=require('config');
const db=config.get('MONGOURI');
const connectDB=async()=>{
    try{
        await mongoose.connect(db);
        console.log("mongodb connected....");
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports=connectDB;