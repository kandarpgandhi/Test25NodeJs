const db = require('../utils/db-connection')
const User = require('../models/users')
const addUser = async (req, res) => {
    try {
        const { email, name } = req.body
        const user = await User.create({
            name: name,
            email: email
        })
        res.status(201).send(`User with name ${name} added`)
    }
    catch (err) {
        res.status(500).send('Unable to make an entry')
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

module.exports = {
    addUser, getAllUsers
}

