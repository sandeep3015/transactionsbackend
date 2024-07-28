const sqlite3 = require('sqlite3').verbose();

const dbname = 'myDatabase.db';

let db = new sqlite3.Database(dbname, (error) =>{
    if (error){
        console.error(error.message)
    } else {
        console.log("Connected Successfully")
        db.run('CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, amount INTEGER, description TEXT, date BLOB, running balance INTEGER)', (error) => {
            if(error){
                console.error(error.message)
            } else {
                console.log("Table created")
            }
        })
    }
})

module.exports = db