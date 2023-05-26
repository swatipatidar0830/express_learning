const app=require("express");
const router=app.Router();
router.get("/",function(req,res){
    res.send("hellow from the file router")
})
module.exports=router;