# Image-Repo

By: Vijay Patel

## How to Use

The app is currently hosted on Heroku at https://nameless-mountain-33431.herokuapp.com/

### Adding an Image(s)

1. Click on "New" in the navbar
2. Click "Browse..." and select images. Currently only file types of .jpg, .jpeg, .png, and .gif are allowed.
3. Add a title and description. (These are required fields). If multiple images were selected, they will have the same Title and Description.
4. Click "Add Image" and the image will now be shown in the home page.

### Viewing an Image

1. Click an Image and a modal will appear containing the Title, Description, a link to the Image Source for Saving, and a Delete button.

### Deleting an Image

1. Click on an image.
2. Press the delete button in the modal.


## How to run locally:

This application is built using Node.js runtime environment, Express.js web application framework, and the frontend is rendered using Embedded JavaScript (EJS) templates.

This project utilizes Cloudinary to store image files and a MongoDB server to store data about the image. Cloudinary is a cloud-based image and video management service.

1. Clone the repository:

   ```
   git clone https://github.com/VJ-P/Image-Repo.git
   ```

2. Download dependencies for the project:
   
   ```
   npm install
   ```
3. Create a file in the root directory of the project called ".env" which contains the credentials for the Cloudinary account. In the file insert the following variables and their values from Cloudinary (found on the Dashboard page under Account Details).

   ```
   CLOUDINARY_CLOUD_NAME=${Cloud name}
   CLOUDINARY_KEY=${API Key}
   CLOUDINARY_SECRET=${API Secret}
   ```

4. Add MongoDB database url to .env file. For local development use 'mongodb://localhost:27017/image-repo'. If used MongoDB Atlas, use the link provided by Atlas.

   ```
   DB_URL=${Database URL}
   ```

5. Add the port number you want to run the app on to .env:

   ```
   PORT=${Port Number}
   ```

6. To run locally, use the following command:

   ```
   node index.js
   ```
7. Open up browser to http://localhost:3000/