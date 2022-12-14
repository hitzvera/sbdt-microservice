const {Transaction} = require('../models')

const getAllTransactions = async(req,res) => {
    try {
      const transactions = await Transaction.findAll()  
      return res.json(transactions)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: true, message: 'failed to fetch the data'})
    }
}

const getTransactionByUserId = async(req,res)=>{
    const userId = req.params.userId
    try{
        const transaction = await Transaction.findAll({where: {userId}})
        return res.json({error: false, message: 'success', transaction})
    } catch(error){
        console.log(error)
        return res.status(500).json({error: true, message: error})
    }
}

const getTransactionByItsId = async(req,res) => {
    const transactionId = req.params.transactionId
    try{
        const transaction = await Transaction.findOne({where: {id: transactionId}})
        return res.json(transaction)
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: true, error})
    }
}
module.exports = {
    getAllTransactions,
    getTransactionByUserId,
    getTransactionByItsId
}