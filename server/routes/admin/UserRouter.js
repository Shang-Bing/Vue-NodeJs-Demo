var express = require('express');
// const { upload } = require('../../controllers/admin/UserController');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

// 图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/avatarUploads/' })

/* GET home page. */
UserRouter.post("/adminapi/user/login",UserController.login)
UserRouter.post("/adminapi/user/upload",upload.single('file'),
UserController.upload)




module.exports = UserRouter;
