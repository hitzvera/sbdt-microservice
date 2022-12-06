const {Item} = require("../models")

const getAllItems = async(req,res) => {
    const pages = parseInt(req.query.pages) || 1
    const perPage = parseInt(req.query.perPage) || 10
    try{
        const items = await Item.findAll({
            limit: perPage,
            offset: (pages-1)*perPage
        })
        return res.json({pages, per_page: perPage, items})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: true, message: error.message})
    }
}
const addItem = async(req,res) => {
    const {name, description, price} = req.body
    try{
        const item = await Item.create({
            name,
            description,
            price
        })
        return res.status(201).json({error: false, message: 'user has been created', item})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: true, message: 'failed to create a new item', err})
    }
}
const editItem = async(req,res) => {
    const itemId = req.params.itemId
    const { name, description, price} = req.body
    try{
        const isUpdated = await Item.update(
            {
                name, description, price
            },
            {
                where: {id: itemId}
            }
        )
        if(isUpdated[0] === 1) return res.json({error: false, message: 'item has been updated'})
        return res.json({error: false, message: 'nothing is updated', isUpdated})
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: true, message: error.message})
    }
}

const deleteItem = async (req,res) => {
    const itemId = req.params.itemId
    try{
        const isDeleted = await Item.destroy({where: {id: itemId}})
        if(isDeleted === 1) return res.status(200).json({error: false, message: 'success delete the item'})
        return res.status(404).json({error: false, message: 'item not found'})
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: true, message: error.erros[0].message})
    }
}

module.exports = {getAllItems, editItem, addItem, deleteItem}