const express=require("express");
const app=express();
app.get("/",function(req,res){
res.write("hellow")
res.write("hii")
res.end()
})
app.listen(4000,function(){
    console.log("expresss run succesfully")
});

app.post(function(req,res){
res.send("posted")
})
app.get("/user/:_id/:fullName",function(req,res){
    res.send(req.params)
    req.body()
})
app.delete(function(req,res){
    res.send("delete succefully")

})
const routes=require("./routes.js")
app.use("/routes",routes)