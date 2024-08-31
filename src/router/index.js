import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";


const routes = [
    {path: '/', redirect:'/main' },
    {path:'/main',component:()=> import("../components/Main.vue")},
    {path:'/feedback',component:()=> import("../components/FeedBack.vue")},
    {path:'/team',component:()=> import("../components/Team.vue")},
    {path:'/screenplay',component:()=> import("../components/Screenplay.vue")},
    {path:'/cooperate',component:()=> import("../components/Cooperate.vue")},
]

const router = createRouter({
    history: createWebHashHistory(),
    base:'juyingxiaoxiang',
    routes
})

export default router
