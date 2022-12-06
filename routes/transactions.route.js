const { Router } = require('express')
const transactionController = require('../controller/transactions.controller')
const { authenticateUser } = require('../middleware/authorization')

const transactionRouter = Router()

transactionRouter.get('/', authenticateUser,transactionController.getAllTransactions)
transactionRouter.get('/:userId', authenticateUser,transactionController.getTransactionByUserId)

module.exports = transactionRouter
