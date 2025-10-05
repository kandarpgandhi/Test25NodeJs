const db = require('../utils/db-connection')
const Buses = require('../models/buses')
const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeat, availableSeat } = req.body
        const bus = await Buses.create({
            busNumber: busNumber,
            totalSeat: totalSeat,
            availableSeat: availableSeat
        })
        res.status(201).send(`Bus with bus number ${busNumber} added`)
    }
    catch (err) {
        res.status(500).send('Unable to make an entry')
    }
}

const getBusByAvailableSeat = async (req, res) => {
    try {
        const minSeats = parseInt(req.params.seats)
        const buses = await Buses.findAll({
            where: {
                availableSeat: {
                    [require('sequelize').Op.gt]: minSeats
                }
            }
        })
        res.status(200).json(buses)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}


module.exports = {
    addBus, getBusByAvailableSeat
}