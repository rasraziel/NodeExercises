const express = require("express");
const app = express();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//GET method to get day
app.get('/day', (req, res)=>{
    let date = new Date();
    let day = {day: days[date.getDay()]}
    res.send(day);
});

//GET method to get month
app.get('/month', (req, res)=>{
    let date = new Date();
    let month = {month: months[date.getMonth()]}
    res.send(month);
});

//GET method to get time
app.get('/time', (req, res)=>{
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    time = {time: time}
    res.send(time);
});

//GET method to get date
app.get('/date', (req, res)=>{
    let date = new Date();
    let dayOfMonth = date.getDate();
    let ending = "";
    if(dayOfMonth%10===1)
        ending+="st";
    else if(dayOfMonth%10===2)
        ending+="nd";
    else if(dayOfMonth%10===3)
        ending+="rd";
    else
        ending+="th";           
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let htmlPage = `<meta http-equiv="refresh" content="1">
                    <h1><span style="color:crimson">Date:</span> ${month}, ${day} the ${dayOfMonth}${ending}, ${year}</h1>
                    <h1><span style="color:crimson">Time:</span> ${time}</h1>`;
    res.send(htmlPage);
});

app.listen(8080);