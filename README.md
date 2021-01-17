# Image-Repo

By: Vijay Patel

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

5. To run locally, use the following command:

   ```
   node index.js
   ```
6. Open up browser to http://localhost:3000/