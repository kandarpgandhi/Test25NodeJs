const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../utils/db-connection')

const Buses = sequelize.define('Buses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeat: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Buses