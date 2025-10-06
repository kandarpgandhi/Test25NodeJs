const User = require('./users');
const Bus = require('./buses');
const Booking = require('./bookings');

// Associations
User.hasMany(Booking);
Booking.belongsTo(User);

Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = { User, Bus, Booking };
