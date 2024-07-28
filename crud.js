const db = require('./database')

//CREATE

const createTransaction = (type, amount, description, callback) => {
    const sql = `INSERT INTO transactions (type, amount, description) VALUES (?, ?, ?)`
    db.run(sql, [type, amount, description], (error) => {
        callback(error, {id: this.lastID})
    })
}

//READ

const readTransaction = (callback) => {
    const sql = `SELECT * from transactions`
    db.all(sql, [], callback)
}

//UPDATE

const updateTransaction = (id, type, amount, description, callback) => {
    const sql = `UPDATE transactions SET type = ?, amount = ?, description = ? WHERE id = ?`
    db.run(sql, [id, type, amount, description], callback)
}

//DELETE

const deleteTransaction = (id, callback) => {
    const sql = `DELETE FROM transactions WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createTransaction, readTransaction, updateTransaction, deleteTransaction}