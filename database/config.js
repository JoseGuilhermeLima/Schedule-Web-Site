const mysql = require('mysql2')
require('dotenv').config()

module.exports = {
    queryValues: (query) => {
        return new Promise((resolve, reject) => {
            const con = createConnection()
            con.query(query, (err, result, fields) => {
                if (err) {
                    reject(err)
                    return
                }

                resolve(result)
            })

            con.end((err) => {
                if (err) reject(err)
            })
        })
    }
}

function createConnection() {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dateStrings: [
            'DATE',
            'DATETIME'
        ]
    })
}