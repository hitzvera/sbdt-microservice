const {Router} = require('express')
const reviewsController = require('../controller/reviews.controller')

reviewsRouter = Router()

reviewsRouter.get('/', reviewsController.getAllReviews)
reviewsRouter.post('/', reviewsController.addReview)

module.exports = reviewsRouter
