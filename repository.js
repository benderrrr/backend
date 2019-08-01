const fs = require("fs");
const {readJsonFromFile, writeJsonFromFile} = require("./fs-utils");

const getUsers = () => {
    return readJsonFromFile('users.json');
};

const addUser = async (name) => {
    let users = await getUsers();
    users.push({name: name});
    return writeJsonFromFile('users.json', users);
};

exports.getUsers = getUsers;
exports.addUser = addUser;

