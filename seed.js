const mongoose = require('mongoose');
const Image = require('./models/image')

// Add connection to local mongodb database
mongoose.connect('mongodb://localhost:27017/image-repo', {
    useNewUrlParser: true,
    useCreateIndex: true,  // Uses createIndex() instead of ensureIndex() to avoid deprecation warnings
    useUnifiedTopology: true
});
// Test mongodb connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database connected");
});

const seedDb = async() => {
    await Image.deleteMany({});
    const i = new Image({"user_id": "Vijay", "url":"https://bit.ly/2XweeNg", "private": false});
    await i.save();
}

seedDb();