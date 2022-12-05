const { Router } = require('express')
const transactionController = require('../controller/transactions.controller')

const transactionRouter = Router()

transactionRouter.get('/', transactionController.getAllTransactions)
transactionRouter.get('/:userId', transactionController.getTransactionByUserId)

module.exports = transactionRouter
