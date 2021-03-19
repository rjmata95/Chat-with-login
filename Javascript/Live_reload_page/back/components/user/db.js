const db = require('mongoose')

async function connect (uri) {
    // db.Promise = global.Promise;
    try {
        await db.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('[db] Succesfuly connected')
        db.connection.on('error',
        err => console.error(`Error found while using DB: ${err}`))

    } catch(err) {
        console.error(`Error found while connecting: ${err}`)
    }

}

module.exports = connect