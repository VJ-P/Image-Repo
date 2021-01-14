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

    var i;
    var a;
    var b;
    var title;
    for(i = 0; i < 10; i++) {
        title = "Picture " + i
        a = new Image({"title": title, "url":"https://source.unsplash.com/collection/8469893", "private": "false"});
        await a.save();
        b = new Image({"title": title, "url":"https://source.unsplash.com/collection/433313", "private": "true"});
        await b.save();
    }
    console.log("Done seeding");
}

seedDb();