const UserModel = require("../../models/UserModel")

const UserService = {
    login:async({username,password}) => {
        return UserModel.find({
            username,
            password
        })
    },
    upload: async({_id,username,introduction,avatar,gender}) => {
        if(avatar){
            return UserModel.updateOne({_id},{
                username,introduction,avatar,gender
            })
        }else {
            return UserModel.updateOne({_id},{
                username,introduction,gender
            })
        }
    },
    add:async({username,introduction,avatar,gender,password,role}) => {
        return UserModel.create({
            username,introduction,avatar,gender,password,role
        })
    },
    getList:async() => {
        return UserModel.find({},["username","role","avatar","introduction","gender"])
    },
    deleteList:async({_id}) => {
        return UserModel.deleteOne({_id})
    }
}

module.exports = UserService