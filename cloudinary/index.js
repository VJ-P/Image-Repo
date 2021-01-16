const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Set up configuration for cloudinary account
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

// Set up instance of cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder:'Image-Repo',
        allowedFormats: ['jpeg', 'png', 'jpg', 'gif']
    }
});

module.exports = {
    cloudinary,
    storage
};