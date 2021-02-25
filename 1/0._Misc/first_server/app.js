const express = require("express");
const app = express();
app.use(express.json());

//Test data
const data = {
    "courses":[{"id":1, "name":"Java", "teacher":"John"},
               {"id":2, "name":"JavaScript", "teacher":"Mike"},
               {"id":3, "name":"C#", "teacher":"Anna"}]
}

// data.courses.forEach(course => console.log("Course: " + course.name + " with " + course.teacher));


//GET method to get all courses
app.get('/courses', (req, res)=>{
    res.send(data.courses);
    console.log("All courses retrieved!");
});

//GET method to get courses by id
app.get('/courses/:id', (req, res)=>{
    res.send({"course": `${data.courses[req.params.id-1].name} with ${data.courses[req.params.id-1].teacher}`})
    console.log(`The course with id=${req.params.id} has been retrieved!`);
});

//POST method to create courses
app.post('/courses', (req, res) => {
    res.send(data.courses);
    console.log("The list of courses has been saved!");
})

//POST method to create a course and set an id
app.post('/courses/:id', (req, res)=>{
    res.send(
        {
            "id": req.params.id,
            "name": "Angular",
            "teacher": "Claus"
    });
    console.log(`A new course (${req.params.name}) has been saved!`);
});

//PUT and PATCH methods to update courses
app.put('/courses', (req, res) => {
    res.send(data.courses);
    console.log("Course list updated");
})

app.patch('/courses', (req, res) => {
    res.send(data.courses);
    console.log("Course list updated");
})

//PUT and PATCH methods to update a course by id
app.put('/courses/:id', (req, res)=>{
    res.send(
        {
            "id": req.params.id,
            "name": "Angular 5",
            "teacher": "Claus"
    });
    console.log("Course name updated");
});

app.patch('/courses/:id', (req, res)=>{
    res.send(
        {
            "id": req.params.id,
            "name": "Angular 5",
            "teacher": "Claus"
    });
    console.log("Course name updated");
});

//DELETE method to delete all courses
app.delete('/courses', (req, res) => {
    res.send(data.courses);
    console.log("All courses have been deleted!");
})

//DELETE method to delete a course by id
app.delete('/courses/:id', (req, res)=>{
    res.send({"id": req.params.id});
    console.log(`Course with id ${req.params.id} has been deleted!`);
});


app.listen(8080);




