//ייצוא אובייקט עבור כל אחת מהפעולות
//המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
    GetlAllProducts:(req,res)=>{
        return res.status(200).json({Msg:"Get product by ID"})
    },
    GetPeroductById:()=>{(req,res)=>{
        return res.status(200).json({Msg:"All Products"})
    }},
    AddProduct:()=>{(req,res)=>{
        return res.status(200).json({Msg:"update product by ID"})
    }},
    DeleteProduct:()=>{},
    UpdateProduct:()=>{},
    

}