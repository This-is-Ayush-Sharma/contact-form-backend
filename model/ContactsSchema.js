const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { collection: 'ContactsSchema' }
)
module.exports = mongoose.model('ContactsSchema',ContactsSchema);