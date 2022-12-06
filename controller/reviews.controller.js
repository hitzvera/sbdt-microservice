const {Review} = require('../models')


const getAllReviews = async(req,res) => {
    try {
      const transactions = await Review.findAll()  
      return res.json(transactions)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: true, message: 'failed to fetch the data'})
    }
}

const addReview = async(req,res)=>{
    const { content, start, itemId, userId } = req.body
    try {
       const review = await Review.create({
        content,
        start,
        itemId,
        userId
       }) 
       return res.status(201).json({
        error: false, message: 'new review has been created',
        review
       })
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: true, message: 'Error creating a review'})
    }
}

const editReview = async(req,res) => {
    const reviewId = req.params.reviewId
    const {content,start} = req.body
    try{
        const isUpdated = await Review.update(
            {
               content, start
            },
            {
                where: {id: reviewId}
            }
        )
        if(isUpdated[0] === 1) return res.json({error: false, message: 'item is updated', isUpdated})
        return res.json({error: false, message: 'nothing is updated'})
    } catch(error){
        console.log(error)
        return res.json({error: true, message: 'something is wrong', errorMessage: error})
    }
}
module.exports = {
    getAllReviews,
    addReview,
    editReview,
}