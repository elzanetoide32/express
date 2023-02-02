const { Router } = require('express')
const express=require('express')
const router=express.Router()
const axios=require('axios')

router.get('/about',(req,res)=>{
    const title= "mi pagina creado desde express"
    const isActive=true
    const user=[
        {
            id:1,
            name:'ryan',
            lastname:'perez'
        },
        {
            id:2,
            name:'joe',
            lastname:'mc millan'
        }
    ]

    res.render('index',{title,isActive,user})
})
router.get('/dashboard',(req,res)=>{
    res.send('dashboard page')
})
router.get('/post',async (req,res)=>{
    const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('post',{posts:response.data})
})
module.exports=router