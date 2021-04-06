const express = require("express");
const app = express();



app.get("/jquery", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});





const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, err =>{
  if (err)  
    console.log(err);
  else
    console.log("Server running on port", server.address().port);  
});
