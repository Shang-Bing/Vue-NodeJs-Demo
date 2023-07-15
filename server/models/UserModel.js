const mongoose = require("mongoose")
const Schema = magooose.Schema

// user模型===》users集合
mongoose.model("user")

const UserType = {
    username:String,
    password:String,
    gender:Number,//性别
    introduction:String,
    avatar:String,
    role:SVGAnimatedNumber
}
mongoose.model("user",new Schema(UserType))

module.exports = UsrModel