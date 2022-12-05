const {User, Transaction, Item} = require('../models')
const crypto = require('crypto')


const signUp = async(req,res)=>{
    const {name,email,password,role} = req.body
    try {
        const user = await User.create({
            name,
            email,
            password,
            role
        })
        return res.status(201).json({
            error: false,
            message: 'user has been created',
            user
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: true,
            message: error.errors[0].message
        })
    }
}
const checkout = async(req,res)=>{
    const { total_price, destination, userId } = req.body
    try{
        const transaction = await Transaction.create({
            userId,
            total_price,
            kode_bayar: (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2),
            status: 'pending',
            destination
        })
        const item = await Item.findAll({
            where: {id:1}
        })
        await transaction.addItem(item)
        const result = await Transaction.findOne({
            where: {uuid: transaction.uuid},
            include: ['items']
        })
        return res.status(201).json({
            error: false,
            message: 'success create transaction',
            result
        })
    } catch(err){
        console.log(err)
        return res.status(500).json({
            error: true,
            message: err
        })
    }
}

const payment = async(req,res)=>{
    const transactionId = req.params.transactionId
    try{
        const transaction = await Transaction.update(
            {
                status: 'paid'
            },
            {
                where: {id: transactionId}
            },
        )
        return res.json({erorr: false, message: 'thank you transaction has been paid', transaction})
    } catch(error){
        console.log(error)
        return res.json({error: true, message: 'payment failed'})
    }
}
const getAllUser = async(req,res)=>{
    try{
        const users = await User.findAll()
        return res.json(users)
    } catch(error){
        console.log(error)
        return res.status(500).json({error: true, messgae: 'failed to get all the users'})
    }
}
const editUser = async(req,res) => {
    const { name, email, password } = req.body
    const userId = req.params.userId
    try{
        const user = await User.update(
            {
                name,
                email,
                password
            },
            {
                where: {id: userId}
            }
        )
        if(user[0] === 1) return res.json({error: false, message: 'success update the data'})
        return res.json({error: false, message: 'nothing is updated'})
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: true, message: 'failed edit the data', errorMessage: error.message})
    }
}
const getUserById = async(req,res)=>{
    const userId = req.params.userId
    try{
        const user = await User.findOne({where: {id: userId}})
        return res.json(user)
    } catch(error){
        console.log(error)
        return res.status(500).json({error: true, message: 'failed to get user', error: error.message})
    }
}

const deleteUser = async(req,res) => {
    const userId = req.params.userId
    try{
        const isDeleted = await User.destroy({where: {id: userId}})
        if(isDeleted === 1) return res.json({error: false, message: 'user has been deleted'})
        return res.json({error: false, message: 'There are no user with that id'})
    } catch(error){
        console.log(error)
        return res.status(500).json({error: true, message: 'can\'t delete the user'})
    }
}

module.exports = {
    checkout,
    signUp,
    payment,
    getUserById,
    getAllUser,
    editUser,
    deleteUser
}