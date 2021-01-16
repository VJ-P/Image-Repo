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

    // var i;
    // var a;
    // var title;
    // var url;
    // var collections = ["1020971", "8469893", "446755", "1353633", "219941", "3178572", "1708734", "531563", "388793", "962362"]
    // for(i = 0; i < 10; i++) {
    //     title = "Picture " + i;
    //     description = "This is picture number " + i;
    //     url = "https://source.unsplash.com/collection/" + collections[i];
    //     a = new Image({"title": title, "url":url, "description": description});
    //     await a.save();
    // }
    console.log("Done seeding");
}

seedDb();