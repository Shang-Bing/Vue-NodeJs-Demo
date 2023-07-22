const jsonwebtoken = require("jsonwebtoken")
const secret = "springflower"
const JWT = {
    generate(value,exprires){
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    verify(token){
        try{
            return jsonwebtoken.verify(token,secret)
        }catch(e){
            return false
        }
    }
    
}

const token = JWT.generate({name:"springflower"},"10s")
// console.log(JWT.verify(token))
module.exports = JWT