const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
// require("../../util/JWT")

const UserController = {
    login:async (req,res)=>{
        // console.log('d',req.body)
        var result = await UserService.login(req.body)

     if(result.length === 0){
         res.send({
             code:"-1",
             error:"用户名密码不匹配"
         })
     }else{
        //  生成token
        const token = JWT.generate({
            _id:result[0]._id,
            username:result[0].username
        },"1ds")
        res.header("Authorization",token)
        res.send({
             ActionType:"OK"
         })
     }

    }
}

module.exports = UserController