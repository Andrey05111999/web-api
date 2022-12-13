//קישור לספריית אקספרס
const express=require('express');
//יצירת מופע של אקספרס
const app =express();
app.get("/", (req,res)=>{res.status(200).json({"Message":"my ecommerce Api App"})});
app.use();
app.get("/product",(req,res)=>{});
//נוסיף שכבות מתאימות

module.exports=app;
