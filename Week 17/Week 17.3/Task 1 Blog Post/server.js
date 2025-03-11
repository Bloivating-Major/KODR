// Imports
const app = require('./src/app');
const config = require('./src/config/config');
const connect = require('./src/db/db');

// Database Connection
connect();


// Server Connection
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});