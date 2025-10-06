const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.post('/', bookingController.createBooking);
router.get('/user/:id', bookingController.getUserBookings);
router.get('/bus/:id', bookingController.getBusBookings);

module.exports = router;
