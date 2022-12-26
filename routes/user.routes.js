const { Router } = require('express')
const userController = require('../controller/user.controller')
const {authenticateUser} = require('../middleware/authorization')

const userRouter = Router()

userRouter.get('/' , authenticateUser, userController.getAllUser)
userRouter.get('/:userId', authenticateUser, userController.getUserById)
userRouter.put('/:userId', authenticateUser, userController.editUser)
userRouter.delete('/:userId', authenticateUser, userController.deleteUser)
userRouter.post('/signup', authenticateUser, userController.signUp)
userRouter.post('/checkout', userController.checkout)
userRouter.put('/payment/:transactionId', userController.payment)

module.exports = userRouter