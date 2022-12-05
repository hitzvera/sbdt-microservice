const {Router} = require('express')
const itemController = require('../controller/items.controller')

const itemRouter = Router()

itemRouter.get('/', itemController.getAllItems)
itemRouter.post('/', itemController.addItem)
itemRouter.put('/:itemId', itemController.editItem)
itemRouter.delete('/:itemId', itemController.deleteItem)

module.exports = itemRouter