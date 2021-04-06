const express = require("express");
const fetch = require('node-fetch');
const app = express();



app.get("/proxy", async (req,res)=>{
    const page = await fetch('https://google.com').then(res => res.text());
    res.send(page);
});





const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, err =>{
  if (err)  
    console.log(err);
  else
    console.log("Server running on port", server.address().port);  
});
