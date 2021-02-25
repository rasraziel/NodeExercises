const express = require("express");
const app = express();

app.use(express.json());

//GET method to get version
// app.get('/about', (req, res)=>{
//     let version = {version: pjson.version}
//     res.send(version);
// });

app.get('/querystring', (req,res)=>{
    res.send(req.query);
});

app.get('/pathvariable/:message/:title', (req,res)=>{
    res.send({title: req.params.title, message:req.params.message});
});

app.post('/whatever', (req, res) => {
    res.send({body: req.body});
})



app.listen(8080);