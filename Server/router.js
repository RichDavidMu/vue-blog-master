const express = require('express')
const router = express.Router()
const db = require('./db')
const tokens = require('./verify')

const verifyToken = tokens.verify
const creatToken = tokens.creatToken
const article = db.Article;
const user = db.User
//添加文章
router.post('/article/new',verifyToken,(req,res) =>{
  console.log(req.body)
  new article(req.body).save((err)=>{
    if (err) res.status(400).send(err)
    else {
      res.status(200).send('成功添加数据')
    }
  })
})
//获取某一篇文章，删除一篇文章
router.route('/article/:id')
  .get((req,res)=>{
  article.findById(req.params.id,(err,data)=>{
    if(err) res.end(err)
    else res.status(200).send(data)
  })
})
  .delete(verifyToken,(req,res)=>{
    article.findByIdAndDelete(req.params.id,(err,data)=> {
      if(err) res.send(err)
      else res.send('successe delete')
    })
  })
  .post(verifyToken,(req,res)=>{
    article.findByIdAndUpdate(req.params.id,{
      title:req.body.title,
      desc:req.body.desc,
      content:req.body.content,
    },(err,data)=>{
      if(err) res.send(err)
      else res.status(200).send('更新成功')
    })
  })
router.get('/article',(req,res)=>{
  article.find((err,data)=>{
    if(err) {
      res.send(err)
    }
    res.send(data.reverse())
  })
})
router.post('/login',(req,res)=>{
  console.log(req.body.name)
  console.log(req.body.password)
  user.findOne({name:req.body.name},(err,doc)=>{

    if(err) res.end(err)
    else if(doc.password === req.body.password){
      const token = creatToken(doc._id,doc.name)
      console.log(token)
      res.status(200).send({
        id:doc._id,
        name:doc.name,
        token:token
      })
    }else {
      res.status(401).end('账号或密码错误')
    }
  })
})
router.get('/token',(req,res)=>{

})
module.exports = router
