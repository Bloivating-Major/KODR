import dotEnv from 'dotenv'
dotEnv.config();


const _config = {
    PORT : process.env.PORT,
    MONGODB_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRE : process.env.JWT_EXPIRE,
    REDIS_HOST : process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD : process.env.REDIS_PASSWORD
}

const config = Object.freeze(_config);

export default config;