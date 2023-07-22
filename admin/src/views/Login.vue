<template>
    <div>
      <Particles
        id="tsparticles"
        :options="options"
      />
      <div class="formContainer">
          <h3>springFlower</h3>
        <el-form
            ref="loginFormRef"
            label-width="80px"
            :model="loginForm"
            :rules="loginRules"
            class="loginForm"
            status-icon
        >
            <el-form-item 
                label="用户名" 
                prop="username"
                >
                <el-input  
                    v-model="loginForm.username"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item 
                label="密码" 
                prop="password"
                >
                <el-input 
                    v-model="loginForm.password"
                    type="password"
                    autocomplete="off"
                
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin">Login</el-button>
            </el-form-item>
        </el-form>
      </div>
        <!-- <button @click="handleLogin">login</button> -->
    </div>
    
</template>

<script setup>

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const loginForm = reactive({
    username:"",
    password:""
})
 
const loginFormRef = ref()

const loginRules = reactive({
    username: [
        { required: true, message: 'Please input  name', trigger: 'blur' }
    ],
    password: [
        {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
        },
    ],
})
const router = useRouter()
const handleLogin = () => {
    
    loginFormRef.value.validate((valid) => {
        console.log('valid',valid)
        if(valid){
            console.log('loginFrom',loginForm)
            axios.post("/adminapi/user/login",loginForm).then(res => {
                // console.log(res)
                if(res.data.ActionType === "OK"){
                    router.push("/index")
                    // localStorage.setItem("token","springFlower")
                }else{
                    ElMessage.error('用户名密码不匹配')
                }
            }).catch(e=>{
                console.log('1')
            })
            
        }
    })
}
//配置particles 登录背景
const options = {
    background: {
    color: {
        value: "#000",//粒子颜色
    },
    },
    fpsLimit: 60,
    interactivity: {
    events: {
        onClick: {
        enable: true,
        mode: "push",//可用的click模式有: "push", "remove", "repulse", "bubble"。
        },
        onHover: {
        enable: true,
        mode: "grab",//可用的hover模式有: "grab", "repulse", "bubble"。
        },
        resize: true,
    },
    modes: {
        bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        },
        push: {
        quantity: 4,
        },
        repulse: {
        distance: 200,
        duration: 0.4,
        },
    },
    },
    particles: {
    color: {
        value: "#ffffff",
    },
    links: {
        color: "#ffffff",//'#dedede'。线条颜色。
        distance: 150,//线条长度
        enable: true,//是否有线条
        opacity: 0.5,//线条透明度。
        width: 1,//线条宽度。
    },
    collisions: {
        enable: false,
    },
    move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 4,//粒子运动速度。
        straight: false,
    },
    number: {
        density: {
        enable: true,
        area: 800,
        },
        value: 80,//粒子数量。
    },
    opacity: {
        value: 0.5,//粒子透明度。
    },
    shape: {
        type: "circle", //可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
    },
    size: {
        random: true,
        value: 5,
    },
    },
    detectRetina: true,
};
</script>

<style lang="scss" scoped>
.formContainer{
   width:500px;
   height: 300px;
   position: fixed;
   left: 50%;
   top:50%;
   transform: translate(-50%,-50%);
   background: rgba($color:#303133,$alpha:0.5);
   color: white;
   text-align: center; 
   padding: 20px;

   h3{
       font-size: 30px;
   }
   .loginForm{
       margin-top:20px
   }
}
</style>
