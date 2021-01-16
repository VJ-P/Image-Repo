const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema for an image item
const imageSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Image', imageSchema);