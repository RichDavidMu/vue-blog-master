const jwt = require('jsonwebtoken')
const secret ='haha'

const verify = (req,res,next) =>{
  if(!req.headers.token){
    console.log('没有token信息')
    res.status(401).end('please login')
  }else{

    const token = req.headers.token
    console.log(req.headers.token)
    jwt.verify(token,secret,function (err) {
      if(err){
        console.log('token已过期')
        res.status(401).end('please login')
        return
      }
        console.log('token验证通过')
        next()


    })
  }

}
const creatToken = (id,name)=>{
  return jwt.sign({
    id:id,
    name:name
  },secret,{expiresIn: '1h'})
}
module.exports = {
  verify,
  creatToken
}
