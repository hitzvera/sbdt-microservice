const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateUser(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN
    if(!token) return res.status(401).json({error: true, message: 'you are not authorize'})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload)=>{
        if(error) return res.json({error: true, message: error.message})
        req.payload = payload
        next()
    })
}

module.exports = {
    authenticateUser
}