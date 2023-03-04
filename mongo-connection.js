const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/taxi-booking-app',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

var db = mongoose.connection
db.on('error', console.error.bind(error, 'mongoose connection error'))
db.once('open', function () {
    console.log('we are connected to mongodb')
})