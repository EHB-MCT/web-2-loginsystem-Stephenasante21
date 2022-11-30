const express = require('express');
const app = express();
const cors = require('cors');

let users = [];

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.listen(3000);
console.log("app running at http://localhost:3000");

app.post('/register', (req, res) => {

    const newUser = {
        "username": "MikeD",
        "email": "mike@ehb.be",
        "password": "test1234"
    };

    const checkUser = newUser.find(u => u.email === email || u.username === username || u.password === password);
    if (checkUser) {
        return res.status(400).json({ error: 'This user exists' });
    } else {
        users = newUser.push;
    }

    res.send(users);
});