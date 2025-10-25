const express=require('express');
const connectDB=require('./config/db');
const app=express();
connectDB();
app.get('/',(req,res)=>res.send('API Running'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/auth',require('./routes/api/auth'));
const PORT=process.env.port||5000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})