const express = require('express')
const {urlencoded} = require('express')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const {User} = require('./models')

require('dotenv').config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended: false}))

app.post('/login', async(req,res)=>{
    const{email,password} = req.body
    try{
        const user = await User.findOne({
            where: {email,password}
        })
        if(!user) return res.status(404).json({message: 'user is not found'})
        const payload = {
            name: user.name,
            email: user.email,
            id: user.id
        }
        const accessToken = generateAccessToken(payload)
        const refreshToken = generateRefreshToken(payload)
        res.cookie('token', accessToken, {httpOnly: true})
        return res.json({accessToken, refreshToken, user})
    } catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
})


const generateAccessToken = (payload) => jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'})
const generateRefreshToken = (payload) => jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'})
app.listen(4000, ()=>{
    console.log(`running on port 4000`)
})