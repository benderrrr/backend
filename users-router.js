let {getUsers, addUser} = require('./repository');

const express = require('express');

const router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    let users = await getUsers();
    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search)>-1)
    }
    res.send(JSON.stringify(users));
});

router.get('/:id', async (req, res) => {
    let userId = req.params.id;
    let users = await getUsers();
    let user = users.find(u => u.id == userId);
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
});

router.post('/', async (req, res) => {
    let name = req.body.name;
    let result = await addUser(name);
    res.send(JSON.stringify({success: true}))
});


module.exports = router;


exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        let result = await addUser("Lesha");
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        let users = await getUsers();
        res.write(JSON.stringify(users));
        res.end();
    }
};