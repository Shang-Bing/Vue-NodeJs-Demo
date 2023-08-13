<template>
    <div>
        <el-page-header icon="" content = "添加用户" title="用户管理"/>
         <el-form
                ref="userFormRef"
                :model="userForm"
                :rules="userFormRules"
                label-width="80px"
                class="demo-ruleForm"
            >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="userForm.password" type="password"/>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-select v-model="userForm.role" class="m-2" placeholder="Select" style="width:100%">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                </el-select>
            </el-form-item>
            <el-form-item label="个人简介" prop="introduction">
                <el-input v-model="userForm.introduction" type="textarea"/>
            </el-form-item>
            <el-form-item label="用户头像" prop="avatar">
                <Upload :avatar = "userForm.avatar" @flowerChange="handlechange"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handlesubmit">添加用户</el-button>
            </el-form-item>
         </el-form>
    </div>
</template>


<script setup>
import {ref, reactive} from 'vue'
import upload from '@/util/upload'
import Upload from '@/components/upload/Upload'
import {useRouter} from 'vue-router'

const userFormRef = ref()
const router = useRouter()
const userForm = reactive({
    username:"",
    password:"",
    role:2,//1是管理员，2普通
    introduction:"",
    avatar:"",
    gender:0,//保密
    file:null
})

const handlechange = (file) => {
    // console.log(file)
    userForm.avatar = URL.createObjectURL(file)
    userForm.file = file
}

const handlesubmit = () => {
    userFormRef.value.validate(async(valid)=>{
        if(valid){
        // 提交数据到后端
        console.log(userForm)
        await upload("adminapi/user/add",userForm)
        router.push(`/user-manage/userlist`)
    }
    })

}

const userFormRules = reactive({
  username: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  role: [
    { required: true, message: '请选择权限', trigger: 'blur' },
  ],
//   gender: [
//     { required: true, message: '请选择性别', trigger: 'blur' },
//   ],
  introduction: [
    { required: true, message: '请输入介绍', trigger: 'blur' },
  ],
  avatar: [
    { required: true, message: '请上传头像', trigger: 'blur' },
  ],
  })

//性别选择
  const options = [
      {
          label:"管理员",
          value:1
      },
      {
          label:"普通",
          value:2
      }
  ]
</script>


<style scoped lang = "scss">
.demo-ruleForm{
    margin-top: 50px;
}
</style>
