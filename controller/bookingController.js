const { Booking, User, Bus } = require('../models');

const createBooking = async (req, res) => {
    try {
        const { seatNumber, userId, busId } = req.body;

        const booking = await Booking.create({ seatNumber, userId, busId });

        res.status(201).json({ message: 'Booking created', booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating booking' });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Booking.findAll({
            where: { userId },
            include: { model: Bus, attributes: ['busNumber'] }
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings for user' });
    }
};

const getBusBookings = async (req, res) => {
    try {
        const busId = req.params.id;

        const bookings = await Booking.findAll({
            where: { busId },
            include: { model: User, attributes: ['name', 'email'] }
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings for bus' });
    }
};

module.exports = {
    createBooking,
    getUserBookings,
    getBusBookings
};
