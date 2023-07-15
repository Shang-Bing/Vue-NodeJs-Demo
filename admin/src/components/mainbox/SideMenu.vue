<template>
    <el-aside :width="$store.state.isCollapsed ? '64px' : '200px'">
        <el-menu 
            :collapse = "$store.state.isCollapsed" 
            :collapse-transition="false" 
            :router="true" 
            :default-active="route.fullPath">
            <el-menu-item index="1">
                <el-icon><House /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><Avatar /></el-icon>
                <span>个人中心</span>
            </el-menu-item>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon><UserFilled /></el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manege/userAdd">添加用户</el-menu-item>
                <el-menu-item index="/user-manege/userList">用户列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>
                    <el-icon><MessageBox /></el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manege/addnews">添加新闻</el-menu-item>
                <el-menu-item index="/news-manege/newslist">新闻列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>
                    <el-icon><Reading /></el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manege/productAdd">添加产品</el-menu-item>
                <el-menu-item index="/product-manege/productlist">产品列表</el-menu-item>
            </el-sub-menu>
        </el-menu>
        
    </el-aside>
</template>
<script setup>
import {House,Avatar,UserFilled,MessageBox,Reading,Pointer} from '@element-plus/icons-vue'
import { useRoute }  from 'vue-router'
const route = useRoute()
// console.log('route',route)
</script>
<style lang="scss" scoped>
.el-aside{
    height: 100vh;
}
.el-menu{
    height: 100vh;
}
</style>