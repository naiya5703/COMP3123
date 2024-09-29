const express = require('express');
const app = express();
const SERVER_PORT = 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS</h1>');
});

// Query String Parameters
// http://localhost:3000/user?firstname=Naiya&lastname=Patel
app.get('/user', (req, res) => {
    console.log(req.query);
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;

    res.json({ firstname, lastname });
    res.send(`<h1>First Name: ${firstname}, Last Name: ${lastname}</h1>`);
})

// Path Parameters
// http://localhost:3000/user/Naiya/Patel
app.post('/user/:firstname/:lastname', (req, res) => {
    let firstname = req.params.firstname;
    let lastname = req.params.lastname;

    res.send(`<h1>First Name: ${firstname}, Last Name: ${lastname}</h1>`);
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})