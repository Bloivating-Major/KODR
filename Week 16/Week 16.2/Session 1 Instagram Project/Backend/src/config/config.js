require("dotenv").config();


const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/kodr-project',
    JWT_SECRET: process.env.JWT_SECRET,
    IMAGEKIT_PUBLIC_KEY : process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY : process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL : process.env.IMAGEKIT_URL_ENDPOINT,
}

const config = Object.freeze(_config);

module.exports = config;