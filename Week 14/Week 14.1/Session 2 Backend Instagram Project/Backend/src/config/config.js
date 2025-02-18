const _config = {
    PORT : process.env.PORT || 3000,
    MONGO_URL : process.env.MONGO_URL || "mongodb://localhost:27017//extraSecure",
    JWT_SECRET : process.env.JWT_SECRET || "superSecretKey",
    JWT_EXPIRATION_TIME : "1h",
}

const config = Object.freeze(_config);

module.exports = config;