const { Router } = require('express')
const userController = require('../controller/user.controller')

const userRouter = Router()

userRouter.get('/', userController.getAllUser)
userRouter.get('/:userId', userController.getUserById)
userRouter.put('/:userId', userController.editUser)
userRouter.delete('/:userId', userController.deleteUser)
userRouter.post('/signup', userController.signUp)
userRouter.post('/checkout', userController.checkout)
userRouter.put('/payment/:transactionId', userController.payment)

module.exports = userRouter