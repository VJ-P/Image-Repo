const path = require('path');
const express = require("express");
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

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/images/public', async(req, res) => {
    const images = await Image.find({"private": false});
    res.render('images/public', {images});
});

app.get('/images/private', async(req, res) => {
    const images = await Image.find({"private": true});
    res.render('images/private', {images});
});

app.get('')

// app.get('/images/new', async (req, res) => {
//     const image = new Image({"user_id": "Vijay", "url":"https://bit.ly/2XweeNg", "private": false});
//     await image.save();
//     res.send(image);
// });

app.listen(3000, () => {
    console.log("Example app listening at port 3000");
})