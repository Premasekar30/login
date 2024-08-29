const express =require("express")

const app = express()
app.get("/",function(req,res)
{
    res.send(" Your are Entered the page..")

})
app.get("/login",function(req,res)
{
    console.log([req.query.username])
    console.log([req.query.password])
    console.log([req.query.Mobile])
})

app.listen(5000,function()
{
    console.log("server stared...")
})