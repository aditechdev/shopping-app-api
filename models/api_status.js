const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    status: {
        required: true,
        type: String,
    }
})

const Status = mongoose.model('Status', statusSchema);
module.exports = Status;