const mongoose = require('mongoose')
const data = require('./data')
mongoose.connect('mongodb://localhost/myblog')

const User = mongoose.model('user',{
  name:String,
  password:String,
})

const Article = mongoose.model('article',{
  title:String,
  desc:String,
  content:String,
  date:Date,
})

const db = mongoose.connection
db.on('error',console.error.bind(console,'Database connection error.'))
db.once('open',()=>{
  console.log('数据初始化')
  User.find({},(err,doc)=>{
    if(err) {console.log(err);
    console.log('初始化失败')}
   else if (!doc.length){
     new User({name:'admin',password:'123456'}).save()
      Promise.all(data.map((item)=>{ new Article(item).save()}))
        .then(()=> {console.log('初始化成功')})
        .catch(()=>{console.log('初始化失败')})
    }else{
     console.log('数据库有数据，无需初始化')
    }
  })
})
module.exports = {
  Article:Article,
  User:User
}

