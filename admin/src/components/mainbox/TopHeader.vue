<template>
    <el-header>
        <!-- <button @click="handleCollapsed">click</button>
        Header -->

        <div class="left">
            <el-icon @click="handleCollapsed"><Menu /></el-icon>
            <span>SpringFlower</span>
        </div>
        <div class="right">
            <span>欢迎admin回来</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                <el-icon :size = "20" color = "white"><User /></el-icon>
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click="handleLOgout">退出</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        </el-header>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Menu, User } from '@element-plus/icons-vue'

const store = useStore()
const router = useRouter()

const handleCollapsed = () =>{
    store.commit("changeCollapsed")
}

const handleCenter = () =>{
    router.push("/center")
}

const handleLOgout = () =>{
    router.push("/login")
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color:#303133;
    color: white;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left , .right{
    display: flex;
}
.left{
    i{
        margin: auto;
        cursor: pointer;
    }
}
.right{
    .el-dropdown{
        margin: auto;
    }
}
</style>