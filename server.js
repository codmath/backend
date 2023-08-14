const express=require("express");

const app=express();
app.get("/", function(request, response){
    response.sendFile(__dirname+"./index.html");
    


});
app.get("/me", function(request, response){
    response.send("Contact me at this port");
});
app.get("/about", function(req, res){
    res.send("This website is owned by me");
});
app.get("/hobbies", function(req, res){
    res.send("I have learnt to use nodemon");
})
app.listen(3005, function(){
    console.log("Server starts and ends at one part try my best ");
});