const express = require("express");
const app = express();

//GET method to get day
app.get('/day', (req, res)=>{
    let date = new Date();
    let day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    day = {day: day[date.getDay()]}
    res.send(day);

});

//GET method to get month
app.get('/month', (req, res)=>{
    let date = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    month = {month: month[date.getMonth()]}
    res.send(month);
});

//GET method to get time
app.get('/time', (req, res)=>{
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    time = {time: time}
    res.send(time);
});

app.listen(8080);