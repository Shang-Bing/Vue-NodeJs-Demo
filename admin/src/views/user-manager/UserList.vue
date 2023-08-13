<template>
    <div>
        <el-card>
            <el-page-header icon="" content = "用户列表" title="用户管理"/>
            <el-table :data="tableData" style="width: 100%" @current-change="handleCurrentChange">
                <el-table-column prop="username" label="用户名"  />
                <el-table-column label="头像"  >
                    <template #default="scope">
                        <div v-if="scope.row.avatar">
                            <el-avatar :size = "50" :src = "'http://localhost:3000'+scope.row.avatar"></el-avatar>
                        </div>
                        <div v-else>
                            <el-avatar :size = "50" src = "'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="角色">
                    <template #default="scope">
                        {{scope.row.role === 1 ? '管理员' : '普通'}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.row)"
                        >Edit</el-button
                        >
                        <el-popconfirm title="Are you sure to delete this?" @confirm = "handleDelete(scope.row)">
                            <template #reference>
                                <el-button 
                                    size="small"
                                    type="danger"
                                    >Delete</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                    </el-table-column>
                <!-- <el-table-column prop="time" label="Time" /> -->
            </el-table>
        </el-card>
        <el-dialog
            v-model="editVisible"
            title="编辑用户"
            width="30%"
        >
            <span>This is a message</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                Confirm
                </el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
const tableData = ref([])
const editVisible = ref(true)
onMounted(()=>{
    getTableData()
})
const getTableData = async() =>{
      const res = await axios.get("/adminapi/user/list")
    //   console.log(res)
    tableData.value = res.data.data
    }

const handleEdit = (data) => {
    console.log(data)
}

const handleDelete = async(data) =>{
    console.log(data)
    await axios.delete(`/adminapi/user/list/${data._id}`)
    getTableData()
}

</script>

<style scoped>
.el-table{
    margin-top: 50px;
}
</style>
