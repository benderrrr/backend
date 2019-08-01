const express = require("express");
const users = require('./users-router')
const app = express();
const cors = require('cors');

process.on('unhandledRejection', function (reason, p) {
    console.log(reason)
})
app.use(cors());
app.use(cors());
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks')
});



app.use(() => {
    res.send(404)
});


app.listen(4444, () => {
    console.log('Go!')
});
