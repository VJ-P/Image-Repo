if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const multer = require("multer"); // Multer is used to manage and route file uploading/storage
const {storage} = require('./cloudinary');
const upload = multer({ storage });

const Image = require("./models/image");

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

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.get('/', async(req, res) => {
    const images = await Image.find();
    res.render('images/index', {images});
});

app.post('/', upload.array('image'), async (req, res) => {
    // const image = new Image(req.body.image);
    // await image.save();
    // res.redirect('/');
    console.log(req.body, req.files)
    res.send("Done")
});

app.get('/new', (req, res) => {
    res.render('images/new');
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Example app listening at port 3000");
});