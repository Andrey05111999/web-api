const router=require('express').Router();
const ProductController=require('../controllers/product');
ProductController.
router.get("/",ProductController.GetPeroductById);
router.get("/", ProductController.GetlAllProducts);
router.put("/",(req,res)=>{
    return res.status(200).json({Msg:"update product by ID"})
});
router.post("/",ProductController.UpdateProduct);
router.delete("/",(req,res)=>{
    return res.status(200).json({Msg:"delete product by id"})
});
