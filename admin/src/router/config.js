// mainbox 动态路由
import Center from '../views/center/Center.vue'
import Home from '../views/home/Home.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import UserList from '../views/user-manager/UserList.vue'
import UserAdd from '../views/user-manager/UserAdd.vue'


const routes = [
    {
        path:"/index",
        component:Home
    },
    {
        path:"/center",
        component:Center
    },
    {
        path:"/news-manege/addnews",
        component:NewsAdd
    },
    {
        path:"/news-manege/newslist",
        component:NewsList
    },
    {
        path:"/product-manege/productlist",
        component:ProductList
    },
    {
        path:"/product-manege/productAdd",
        component:ProductAdd
    },
    {
        path:"/user-manege/userAdd",
        component:UserAdd
    },
    {
        path:"/user-manege/userList",
        component:UserList
    }
]

export default routes