const express = require('express');
const {createTransaction, readTransaction, updateTransaction, deleteTransaction} = require('./crud')

const app = express();

app.use(express.json())


//GET

app.get('/transactions', (req, res) => {
    readTransaction((error, rows) => {
        if(error){
            res.status(500).send(error.message)
        }else {
            res.status(200).json(rows)
        }
    })
})

//POST

app.post('/transactions', (req, res) => {
    const {type, amount, description} = req.body
    createTransaction(type, amount, description, (error, data) => {
        if(error){
            res.status(500).send(error.message)
        }else {
            res.status(201).send(`Transaction is added ID : ${data.id}`)
        }
    })
})

//PUT

app.put('/transactions/:id', (req, res) => {
    const {type, amount, description} = req.body
    updateTransaction(req.params.id, type, amount, description, (error) => {
        if(error){
            res.status(500).send(error.message)
        }else {
            res.status(200).send("Transaction Updated")
        }
    })
})

//DELETE

app.delete('/transactions/:id', (req, res) => {
    deleteTransaction(req.params.id, (error) => {
        if(error){
            res.status(500).send(error.message)
        } else {
            res.status(200).send("Deleted")
        }
    })
})

app.listen(4000, () => {
    console.log('Server is Running')
})