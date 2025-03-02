const imageKit = require('imagekit');

const config = require('../config/config');

var imagekit = new imageKit({
    publicKey : config.IMAGEKIT_PUBLIC_KEY,
    privateKey : config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : config.IMAGEKIT_URL
});

module.exports = imagekit;