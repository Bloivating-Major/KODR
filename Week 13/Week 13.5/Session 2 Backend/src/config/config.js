const _config = {
    PORT : process.env.PORT || 3000,
    MONGO_URL : process.env.MONGO_URL || "mongodb://localhost:27017//extraSecure",
}

const config = Object.freeze(_config);

module.exports = config;