const { Router } = require('express')
const transactionController = require('../controller/transactions.controller')
const { authenticateUser } = require('../middleware/authorization')

const transactionRouter = Router()

transactionRouter.get('/', authenticateUser,transactionController.getAllTransactions)
transactionRouter.get('/user/:userId', authenticateUser,transactionController.getTransactionByUserId)
transactionRouter.get('/:transactionId', authenticateUser, transactionController.getTransactionByItsId)

module.exports = transactionRouter
