const express = require("express");
const app = express();

//Test data
const data = {
    "courses":[{"id":1, "name":"Java", "teacher":"John"},
               {"id":2, "name":"JavaScript", "teacher":"Mike"},
               {"id":3, "name":"C#", "teacher":"Anna"}]
}

// data.courses.forEach(course => console.log("Course: " + course.name + " with " + course.teacher));

//GET method to get all courses
app.get('/courses', (req, res)=>{
    res.send(data);
});

//GET method to get courses by id
app.get('/courses/:id', (req, res)=>{
    res.send({"course": `${data.courses[parseInt(req.path.slice(-1))-1].name} with ${data.courses[parseInt(req.path.slice(-1))-1].teacher}`})
});

app.listen(8080);




