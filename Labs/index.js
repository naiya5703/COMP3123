const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.json());

//  Serve home.html page 
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Return all details from user.json file to client as JSON format
router.get('/profile', (req, res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: 'Server Error: Unable to read user data',
      });
    }
    res.json(JSON.parse(data)); 
  });
});

// Read data from user.json file
// For login 
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: 'Server Error: Unable to read user data',
      });
    }

    const user = JSON.parse(data);

    if (username !== user.username) {
      return res.status(401).json({
        status: false,
        message: 'User Name is invalid',
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        status: false,
        message: 'Password is invalid',
      });
    }

    res.json({
      status: true,
      message: 'User is valid',
    });
  });
});

//For logout
router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.json({
    message: `${username} successfully logged out.`,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).json({
    status: false,
    message: 'Server Error',
  });
});

app.use('/', router);

// Start the server at port 8086
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
