const app = require('./src/app')
const config = require('./src/config/config')
const connect = require('./src/db/db');


connect();


app.listen(config.PORT, () => {
    console.log("server is running on port " + config.PORT)
})
