const mongoose = require("mongoose")
const Schema = mongoose.Schema
// user模型===》users集合

const UserType = {
    username:String,
    password:String,
    gender:Number,//性别
    introduction:String,
    avatar:String,
    role:Number
}
const UserModel = mongoose.model("user",new Schema(UserType))

module.exports = UserModel