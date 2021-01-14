const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema for an image item
const imageSchema = new Schema ({
    //"user_id": String,
    "title": String,
    "url": String,
    "private": Boolean
});

module.exports = mongoose.model('Image', imageSchema);