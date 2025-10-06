const express = require('express')
const db = require('./utils/db-connection')
const app = express()

const userRoutes = require('./routes/userRoutes')
const busRoutes = require('./routes/busRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
// const paymentRoutes = require('./routes/paymentRoutes')

const userModel = require('./models/users')
// const paymentModel = require('./models/payments')
const busModel = require('./models/buses')
// const bookingModel = require('./models/bookings')
require('./models/index');
app.use(express.json())

app.use('/user', userRoutes)
// app.use('/payment', paymentRoutes)
app.use('/bus', busRoutes)
app.use('/booking', bookingRoutes)

db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running')
        })
    })
    .catch((err) => {
        console.log('Error syncing database:', err)
    })

